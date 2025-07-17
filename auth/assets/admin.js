document.addEventListener('DOMContentLoaded', function() {
  const chatButtons = document.querySelectorAll('.chatbutton');
  
  chatButtons.forEach(button => {
    const emailElement = button.querySelector('.email');
    
    emailElement.addEventListener('click', function() {
      chatButtons.forEach(btn => {
        if (btn !== button) btn.classList.remove('expanded');
      });
      
      button.classList.toggle('expanded');
    });
    
  });
  
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.chatbutton')) {
      chatButtons.forEach(button => {
        button.classList.remove('expanded');
      });
    }
  });
});

function handleDeleteUser(email) {
  if (confirm(`Tem certeza que deseja deletar o usuário ${email}?`)) {
    fetch(`/api/user`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ email })
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        if (data.ok) {
          location.reload();
        }
      })
      .catch(error => {
        console.error('Erro ao deletar usuário:', error);
        alert("Erro ao deletar usuário.");
      });
  }
}

function handleMakeAdmin(email) {
  if (confirm(`Tem certeza que deseja tornar ${email} um admin?`)) {
    fetch(`/api/user/make-admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ email })
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        if (data.ok) {
          location.reload();
        }
      })
      .catch(error => {
        console.error('Erro ao promover usuário:', error);
        alert("Erro ao promover usuário a admin.");
      });
  }
}


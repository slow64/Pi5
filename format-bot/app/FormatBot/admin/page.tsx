'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { messageAPI } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Message {
  _id: string;
  content: string;
  sent: boolean;
  createdAt: string;
  email: string;
}

export default function AdminPage() {
  const { user, logout, loading } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoadingMessages, setIsLoadingMessages] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/FormatBot/login');
      return;
    }

    if (user) {
      loadMessages();
    }
  }, [user, loading, router]);

  const loadMessages = async () => {
    try {
      setIsLoadingMessages(true);
      const response = await messageAPI.getUserMessages();
      if (response && response.ok && Array.isArray(response.data)) {
        setMessages(response.data);
      }
    } catch (error) {
      console.error('Erro ao carregar mensagens:', error);
      setError('Erro ao carregar mensagens');
    } finally {
      setIsLoadingMessages(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setIsSending(true);
    setError('');

    try {
      await messageAPI.createMessage({
        content: newMessage,
        sent: true
      });
      setNewMessage('');
      await loadMessages(); // Recarregar mensagens
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setError('Erro ao enviar mensagem');
    } finally {
      setIsSending(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push('/FormatBot');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-white">Carregando...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Redirecionamento já está sendo feito no useEffect
  }

  return (
    <div className="min-h-screen bg-zinc-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white">Painel Administrativo</h1>
            <p className="text-gray-400">Bem-vindo, {user.username}</p>
          </div>
          <div className="flex gap-4">
            <Link href="/FormatBot">
              <Button variant="outline" className="border-zinc-600 text-white hover:bg-zinc-700">
                Voltar ao Site
              </Button>
            </Link>
            <Button 
              onClick={handleLogout}
              variant="destructive"
            >
              Sair
            </Button>
          </div>
        </div>

        {/* User Info Card */}
        <Card className="mb-6 bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white">Informações do Usuário</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-gray-400">Nome</p>
                <p className="text-white font-medium">{user.username}</p>
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <p className="text-white font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-gray-400">Tipo</p>
                <Badge variant={user.role === 'admin' ? "default" : "secondary"}>
                  {user.role === 'admin' ? 'Administrador' : 'Usuário'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Send Message Card */}
        <Card className="mb-6 bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white">Enviar Mensagem</CardTitle>
            <CardDescription className="text-gray-400">
              Envie uma nova mensagem para o sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSendMessage} className="space-y-4">
              <Textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Digite sua mensagem aqui..."
                className="bg-zinc-700 border-zinc-600 text-white min-h-[100px]"
                required
              />
              {error && (
                <Alert className="bg-red-900/50 border-red-700">
                  <AlertDescription className="text-red-200">
                    {error}
                  </AlertDescription>
                </Alert>
              )}
              <Button 
                type="submit" 
                disabled={isSending || !newMessage.trim()}
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
              >
                {isSending ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Messages Table */}
        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white">Mensagens</CardTitle>
            <CardDescription className="text-gray-400">
              Histórico de mensagens do sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoadingMessages ? (
              <div className="text-center py-8">
                <p className="text-gray-400">Carregando mensagens...</p>
              </div>
            ) : messages.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-400">Nenhuma mensagem encontrada</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="border-zinc-700">
                    <TableHead className="text-gray-300">Data</TableHead>
                    <TableHead className="text-gray-300">Conteúdo</TableHead>
                    <TableHead className="text-gray-300">Tipo</TableHead>
                    <TableHead className="text-gray-300">Email</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((message) => (
                    <TableRow key={message._id} className="border-zinc-700">
                      <TableCell className="text-gray-300">
                        {new Date(message.createdAt).toLocaleString('pt-BR')}
                      </TableCell>
                      <TableCell className="text-white max-w-md">
                        <div className="truncate" title={message.content}>
                          {message.content}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={message.sent ? "default" : "secondary"}>
                          {message.sent ? 'Enviada' : 'Recebida'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-300">
                        {message.email}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


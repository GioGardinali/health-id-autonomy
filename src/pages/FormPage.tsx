import { useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Form = () => {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("https://b1c1c6a4a50f.ngrok-free.app/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setMessage("Formulário enviado com sucesso!");
      setFormData({ nome: "", idade: "", email: "" });
    } else {
      setMessage("Erro ao enviar formulário.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center text-foreground">
          Cadastro
        </h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-card p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-background"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Idade</label>
            <input
              type="number"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-background"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-background"
            />
          </div>

          <Button type="submit" className="w-full">
            Enviar
          </Button>

          {message && (
            <p className="text-center text-sm text-muted-foreground mt-4">
              {message}
            </p>
          )}
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Form;

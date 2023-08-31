import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";

export default function Login() {
  const { login } = useContext(AuthContext);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(){
    login(user,password)
    
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-950">
      <div className="flex flex-col border p-32 rounded-md bg-zinc-800 shadow-md shadow-zinc-700"
      
      style={{
        backgroundColor: "#111827",
      }}
      >
        <label htmlFor="" className="font-bold mb-2 text-3xl text-zinc-200">
          Usuário
        </label>
        <input
          type="text"
          placeholder="fulano"
          className="border p-3 mb-4 rounded-md w-72 required text-2xl"
          value={user}
          onChange={(text)=>setUser(text.target.value)}
        />
        <label htmlFor="" className="font-bold mb-2 text-3xl text-zinc-200">
          Password
        </label>
        <input
          type="password"
          placeholder="*********"
          className="border p-3 rounded-md text-2xl"
          value={password}
          onChange={(text)=>setPassword(text.target.value)}

        />
        <button
        onClick={handleLogin}
          type="submit"
          className="border p-3 mt-3 rounded-md font-semibold text-3xl bg-green-700 hover:bg-green-600"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

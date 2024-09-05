import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const url = 'http://localhost:8080/test/index.php';
    let fData = new FormData();
    fData.append('name', name);
    fData.append('mobile', mobile);
    fData.append('email', email);
    axios.post(url, fData).then(Response => alert(Response.data)).catch(Error => alert(Error));
  }

  return (
    <div className='container flex items-center justify-center min-h-screen antialiased'>
      <form action='' method='post' className='max-w-md'>
        <div className='flex flex-col mb-2'>
          <label htmlFor='nama'>Name</label>
          <input type='text' name='nama' id='nama' value={name} onChange={(e)=> setName(e.target.value)} className='border rounded-md' />
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor='mobile'>Mobile</label>
          <input type='text' name='mobile' id='mobile' value={mobile} onChange={(e)=> setMobile(e.target.value)} className='border rounded-md' />
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)} className='border rounded-md' />
        </div>
        <input type='button' value='Register' name='submit' id='submit' onClick={handleSubmit} className='px-2 bg-blue-500 rounded-md' />
      </form>
    </div>
  );
}

export default App;

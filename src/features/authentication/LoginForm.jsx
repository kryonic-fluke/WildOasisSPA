import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import useLogin from "./useLogin";
import SpinnerMini from '../../ui/SpinnerMini';
function LoginForm()  {
  const [email, setEmail] = useState("user1234@example.com");
  const [password, setPassword] = useState("12345");
  const {login,isLoading}  =useLogin();
   function handleSubmit(e) {
      e.preventDefault();

      if(!email||!password) return console.log('error occured');
      login({email,password},{
        onSettled:()=>{
          setEmail('');
          setPassword('');
        }
      });

      
  }



  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address" orientation="vertical">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label="Password" orientation="vertical">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
           disabled={isLoading}
        />
      </FormRow>
      <FormRow orientation="vertical">
        <Button size="large" type="submit"  disabled={isLoading}>{!isLoading ? 'Login' : <SpinnerMini/>}</Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;

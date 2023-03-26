import { login } from "@/api/user";
import { useEffect } from "@/lib"

const LoginPage= () => {
  useEffect(()=>{
    const form = document.querySelector(".Form-Login")
    const Email = document.querySelector("#Email")
    const password = document.querySelector("#password")

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      try {
        const response = await login({
          email: Email.value,
          password: password.value
        })
        localStorage.setItem("user", JSON.stringify(response.data.user));
        if (response.data.user.role == 1) {
            document.location.href = "/admin/";
        } else {
            document.location.href = "/";
        }
      }  catch (error) {
        console.log(error.response.data)
        // handle error
      }
    })
  }, []);
  return/*html*/`
    <div class="Login">
      <div class="grap-Login">
      <div class="square" style="--i:0;"></div>
      <div class="square" style="--i:1;"></div>
      <div class="square" style="--i:2;"></div>
      <div class="square" style="--i:3;"></div>
      <div class="square" style="--i:5;"></div>
        <div class="form">
            <h1>Login Form</h1>
            <form action="" class="Form-Login">
              <div class="inputBox">
                <input type="text" placeholder="Email" id="Email">
              </div>
              <div class="inputBox">
                <input type="password" placeholder="Password" id="password">
              </div>
              <div class="inputBox">
                <input type="submit" value="Login" id="login">
              </div>
              <div class="more">
              <p class="forget">Forgot Password ?<a href=""> Click here</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
}

export default LoginPage
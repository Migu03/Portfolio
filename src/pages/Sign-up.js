import { useEffect } from "@/lib";
import { signUp } from "@/api/user";

const SignUp = () => {
  useEffect(()=>{
    const form = document.querySelector(".form-signup")
    const email = document.querySelector("#Email")
    const username = document.querySelector("#username")
    const password = document.querySelector("#password")

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      try {
        const response = await signUp({
          username: username.value,
          email: email.value,
          password: password.value,
          role: 0
        })
        console.log(response.data); // response data from the API
        document.location.href = "/signin";
      }  catch (error) {
        console.error(error);
        // handle error
      }
    });
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
              <h1>Sign-Up Form</h1>
              <form action="" class="form-signup">
                <div class="inputBox">
                    <input type="text" placeholder="Email" id="Email">
                </div>
                <div class="inputBox">
                  <input type="text" placeholder="Username" id="username">
                </div>
                <div class="inputBox">
                  <input type="password" placeholder="Password" id="password">
                </div>
                <div class="inputBox">
                  <input type="submit" value="Sign Up" id="signUP">
                </div>
                <div class="more">
                <p class="forget"></p>
                <p class="forget">Have a account ?<a href="/signin"> LogIn</a></p>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
    `
  }
  export default SignUp
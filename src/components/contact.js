import socialMedia from "@/components/social-media"
const contact = () => {
  return/*html*/`
  <div id="contact" class="contarner-contact">
    <div class="text-contact">
      <div class="row">
        ${socialMedia()}
        <div class="col-md-9">
          <ul class="contact-info">
            <li><i class="fa fa-map-marker"></i> Address: 11c 131/24 st Phuong Canh, Xuan Phuong, Nam Tu Liem Ha Noi, Viet Nam </li>
            <li><i class="fa fa-phone"></i> Phone: 0123456789</li>
            <li><i class="fa fa-envelope"></i> Email: info@example.com</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="Contact">
      <div class="square" style="--i:0;"></div>
      <div class="square" style="--i:1;"></div>
      <div class="square" style="--i:2;"></div>
      <div class="square" style="--i:3;"></div>
      <div class="square" style="--i:5;"></div>
        <div class="form">
            <h3>Contact Me</h3>
            <form action="">
              <div class="inputBox">
                <input type="text" placeholder="Username" id="username">
              </div>
              <div class="inputBox">
                <input type="text" placeholder="Email" id="password">
              </div>
              <div class="inputBox">
                <textarea name="" id="textarea" cols="48" rows="7"></textarea>
              </div>
              <div class="inputBox">
                <input type="submit" value="Send" id="contact">
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
  `
}

export default contact
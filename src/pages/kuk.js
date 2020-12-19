import React from "react"
import SEO from "../components/Seo"
import Nav from "../components/Nav"
import ppl from "../images/planner.jpg"
import kuk from "../images/tea.jpg"
import three from "../images/europe.jpg"
 

const KukPage = () => (
  <div>
    <SEO title="Kuka Architech" />
    <Nav />
    <div className = "bio-container">
      <img className="bio-image" src={three} alt='' />
      <div className="containy" text-align= "justify" text-justify="inter-word">
        <h1 className="name" style={{color:"red"}}>This is Kuka</h1> 
        <h3 style={{color:"red", margin:"0"}} >Architecture</h3>   
        <h3 style={{margin:"0"}}>Interior Design</h3>
        <h3 style={{margin:"0"}}>Urban Design</h3>
        <h3 style={{margin:"0"}}>Construction & management</h3>
        <h3>Engineering Works</h3>       
        <h2 className="short-bio" style={{color:"#649eb3"}}>We believe in your satisfaction.Varius sit amet mattis vulputate enim nulla. Ullamcorper sit amet risus nullam eget felis. Volutpat blandit aliquam etiam erat velit scelerisque</h2> 
      </div>
    </div> 
    <div className="biography-container" style={{display:"flex"}}>
      <div style={{marginRight:"10px"}}>
           
          <img className="bio-image" src={ppl} alt='' />
          <p>
          <span>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla. Ullamcorper sit amet risus nullam eget felis. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Nibh praesent tristique magna sit amet purus
          </p>
      </div>

      <div style={{marginRight:"10px"}}>
      <img className="bio-image" src={three} alt='' />
      <p>
      <span>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla. Ullamcorper sit amet risus nullam eget felis. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Nibh praesent tristique magna sit amet purus
      </p>
      </div> 
      <div>
      <img className="bio-image" src={kuk} alt='' />
      <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" width="auto" height="auto" />
      <p>
      <span>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla. Ullamcorper sit amet risus nullam eget felis. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Nibh praesent tristique magna sit amet purus
      </p>
      </div>         
    </div>
    <div className="biography-container" style={{backgroundColor:"coral"}}>
      <h1>Contact Us</h1>
      <h3 >Email:prtp@gmail.com</h3>
      <h4>Phone number:0000-0000-00</h4>
    </div>      
    {/* <div className="biography-container">
      <p><span>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla. Ullamcorper sit amet risus nullam eget felis. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Nibh praesent tristique magna sit amet purus. Malesuada pellentesque elit eget gravida cum. Felis imperdiet proin fermentum leo vel orci porta. Diam quam nulla porttitor massa id neque. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Odio euismod lacinia at quis risus sed. Ut enim blandit volutpat maecenas. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Feugiat vivamus at augue eget arcu dictum varius duis. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Sed egestas egestas fringilla phasellus faucibus scelerisque. Aliquam eleifend mi in nulla posuere. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Aliquet eget sit amet tellus. Vivamus arcu felis bibendum ut tristique et egestas quis.</p>

      <p>Nulla porttitor massa id neque aliquam. Ut aliquam purus sit amet luctus. Elit duis tristique sollicitudin nibh sit amet. Leo vel orci porta non pulvinar neque. Ut sem nulla pharetra diam. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Purus faucibus ornare suspendisse sed nisi lacus. Lacus sed viverra tellus in hac habitasse. In nulla posuere sollicitudin aliquam ultrices. Magna etiam tempor orci eu. Eu ultrices vitae auctor eu augue ut. Sit amet mauris commodo quis imperdiet. Convallis aenean et tortor at risus viverra. Ac tortor dignissim convallis aenean et tortor at. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Massa tincidunt dui ut ornare lectus. Massa tincidunt dui ut ornare lectus sit amet est placerat.</p>
      
      <p>Nibh ipsum consequat nisl vel pretium lectus quam id. Arcu ac tortor dignissim convallis aenean et tortor. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Pulvinar elementum integer enim neque. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Nisl pretium fusce id velit ut tortor. Fermentum et sollicitudin ac orci phasellus. Quam adipiscing vitae proin sagittis nisl rhoncus. Blandit libero volutpat sed cras ornare. Id faucibus nisl tincidunt eget. Sed viverra ipsum nunc aliquet. Et ligula ullamcorper malesuada proin libero nunc consequat. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Blandit aliquam etiam erat velit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Semper eget duis at tellus at urna condimentum mattis pellentesque. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Scelerisque varius morbi enim nunc faucibus a. Vulputate dignissim suspendisse in est ante.</p>
    </div> */}
  </div>
)

export default KukPage;

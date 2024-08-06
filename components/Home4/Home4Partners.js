import Link from "next/link";

export default function Home4Partners() {
  return (
    <>
      <div className="section_4">
        <div className="container max1500">
          <div className="contact_alpha">
            <div className="contact_in">
              <div className="contact_left">
                <div className="left_in">
                  <h3>Do you want to be in our clients list?</h3>
                  <p>
                    You have a very good chance right now. Don’t miss it out
                  </p>
                </div>
              </div>
              <div className="contact_right">
                <form
                  className="contact_form"
                  action="/"
                  method="post"
                  autoComplete="off"
                  data-email=""
                >
                  {/* Don't remove below code in avoid to work contact form properly.
                    You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

                  <div
                    className="success"
                    data-success="Your message has been received, we will contact you soon."
                  ></div>
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  {/* <!-- --> */}

                  <div className="items">
                    <div className="item">
                      <input id="name" type="text" placeholder="Name" />
                    </div>
                    <div className="item">
                      <input id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="item">
                      <textarea id="message" placeholder="Message"></textarea>
                    </div>
                    <div className="item">
                      <Link href="#" id="send_message">
                        Send Message
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

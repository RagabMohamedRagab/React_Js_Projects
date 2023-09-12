import React, { Component } from "react";
import {Drop,Conatiner,Droptitle,Form,DropSpan,INput,Forminput,Inputext,Inputemail,Textarea} from './style.js'
class Contact extends Component {
  render() {
    return (
      <>
        <Drop>
          <Conatiner>
            <Droptitle>
              <DropSpan>Drop </DropSpan>Me A line
            </Droptitle>
            <Form>
              <Forminput>
                <Inputext placeholder="Your Name" />
               <Inputemail placeholder="Your Email"/>
              </Forminput>
              <Inputext   placeholder="Your Subject" />
              <Textarea
                cols="30"
                rows="10"
                placeholder="Your Message"
              ></Textarea>
              <INput type="submit" value="Send Message" />
            </Form>
          </Conatiner>
        </Drop>
      </>
    );
  }
}
export default Contact;

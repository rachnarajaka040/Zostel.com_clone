import React from "react";
import './Payment.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Payment = () => {
    
    return(
        <div>
            <div id="navBar">
            <Navbar />
            </div>
        <div id="mainDiv" style={{display:"flex", flexDirection: "row"}}>
        <div id="leftBoxes" style={{display:"flex", flexDirection: "column", gap: "10px", width: "70%"}}>
        <div id="booking">
            
            <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 0 24 24" width="34"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            <h1>Confirm your booking</h1></div> 
        <div id="guestInformation">
            <div>Guest Information</div>
            <div id="costumerDetails">
            <div id="nameInput">
            <span>Name</span>
            <input type="text" placeholder="Enter the first name"/>
            <input type="text" placeholder="Enter the middle name"/>
            <input type="text" placeholder="Enter the last name"/>
            </div>
            <div id="genderInput">
            <span>Gender</span>
            <select name="gender" id="">
                <option value="male">Male</option>
                <option value="femal">Female</option>
                <option value="others">Others</option>
            </select>
            </div>
            <div id="emailInput">
            <span>Email</span>
            <input type="text" placeholder="Select the Email" />
            </div>
            <div id="numberInput">
            <span>Number</span>
            <input type="text" placeholder="+91" />
            </div>
            <div id="adressInput">
            <span>Address</span>
            <input type="text" placeholder="Select the Adress" />
            </div>
            </div>
        </div >

        <div id="property" >
          <div>Property Policy</div>
          <div>- Guests are required to pay a 21% advance at the time of booking itself. The entire balance needs to be cleared upon arrival at the property during check-in.<br></br>

- Our standard check-in time is 12 PM and the standard check-out time is 10 AM. Early check-in and late check-out requests are subject to availability, and may also attract an additional fee at the property's discretion.<br></br>

- We strictly DO NOT allow a group of more than 8 people. In case of a group of 4 or more, you might be purposefully allotted different dorm rooms. Further, if the group behaviour is deemed unfit at the property, the Zostel Property Manager, upon subjective evaluation, retains the full right to take required action which may also result in an on-spot cancellation without refunds.<br></br>

- Children below 18 years of age are not permitted entry/stay at any of our hostels, with or without guardians. We do not recommend families.<br></br>

- We only accept a government ID as valid identification proof. No local IDs shall be accepted at the time of check-in.<br></br>

- Guests are not permitted to bring outsiders inside the hostel campus.<br></br>

- We believe in self-help and do not provide luggage assistance or room services.<br></br>

- Drugs and any substance abuse is strictly banned inside and around the property.<br></br>

- Alcohol consumption is strictly prohibited in and around the property premises.<br></br>

- Right to admission reserved.<br></br>

<h4> Chargeable & non-chargeable activities:</h4>

Bonfire: INR 100 per person<br></br>

Rock climbing: INR 100 per person<br></br>

A Snooker Table: INR 150 per hour (12-2 PM and 7-11 PM only)<br></br>

Slacklining: Free of cost<br></br>

Badminton: Free of cost<br></br>



<h4> NOTE:<br></br>

- You are advised to not follow any online maps for directions.<br></br>

- Only self-driven vehicles are allowed to be parked at the property. Chauffeur-driven cars can use the parking facility near the paragliding landing site.
</h4>
 </div>
</div>
  <div id="cancellationPolicy">
    <div>Cancellation Policy</div>
    <div>We understand that sometimes plans change. Hence, to make it light on your pocket, we are only charging a 21% advance, which is on a non-refundable basis.
    <br></br>
    <br></br>

<h4> NOTE:</h4>

- 21% advance payment is non-refundable at all times, as stated above. <br></br>

- If you have paid any amount over this 21%, it stands applicable for a credit only if the cancellation is informed 7 days or more in advance. You will be able to avail the credited amount for any future booking at any of our properties.<br></br>

- If informed within 7 days of the standard check-in time (12 pm), the amount shall be adjusted against the cancellation fee.<br></br>

 

For any other queries, please reach out to us at reservations@zostel.com.</div>
  </div>

</div>



  <div id="summary" style={{display:"flex", flexDirection: "column", width: "26%"}}>
    <h2>Summary</h2>
    <div>
        <span id="nights"></span>
        starting from
        <span id="date"></span>
    </div>
    <div>
        <div id="picture"></div>
        <div id="roomDetails"></div>
        <div id="priceOfRoom"></div>
    </div>
    <div>
        <div>
            <h3>Tax</h3>
            <h3 id="tax"></h3>
        </div>
        <div>
            <h3>Total (tax incl.)</h3>
            <h3 id="total"></h3>
        </div>
        <div>
            <h3>Payable Now</h3>
            <h3 id="payable"></h3>
        </div>
    </div>
    <div id="checkbox">
    <input type="checkbox"/>
    <p>I acknowledge and accept the terms and conditions mentioned in the Property Policy & Cancellation Policy. </p>
    </div>
    <div>
    <div id="reserve">Reserve</div>
    <div id="invalidInput"></div>
    </div>
  </div>


        </div>
        <br />
        
        <div id="footer">
          <Footer/>
        </div>
        </div>
    );
};


export default Payment;
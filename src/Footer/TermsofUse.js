import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import Base from '../Component/Base';
import img1 from '../Images/cutm2.jpg';


export default class TermsofUse extends Component {
  render() {
    return (
    <Base>
    
      <Card className= "mt-8" body color='warning' outline>
        <CardImg alt="Card image cap" src={img1} style={{height: 370}} top width="80%"/>
          <CardBody>
          <CardTitle tag="h5"  className='text-center'>
           Terms Of Use
          </CardTitle>
          <CardText>
          We reserve the right in our sole discretion to edit or delete any documents, information or other content appearing on the Site.
      
         <h5>Indemnification</h5>
              <br></br>
             You agree to indemnify, defend and hold us and our partners, attorneys, staff and affiliates (collectively, “Affiliated Parties”) harmless from any liability, loss, claim and expense, including reasonable attorney’s fees, related to your violation of this Agreement or use of the Site.
              <br></br>
              <br></br>
             <h5>Non-Transferable</h5>

             Your right to use the Site is not transferable. Any password or right given to you to obtain information or documents is not transferable.
             <br></br>
             <br></br>
             <h5>Disclaimer</h5>

             The information and services may contain bugs, errors, problems or other limitations. We and our affiliated parties have no liability whatsoever for your use of any information or service. In particular, but not as a limitation thereof, we and our affiliated parties are not liable for any indirect, special, incidental or consequential damages (including damages for loss of business, loss of profits, litigation, or the like), whether based on breach of contract, breach of warranty, tort (including negligence), product liability or otherwise, even if advised of the possibility of such damages. The negation of damages set forth above are fundamental elements of the basis of the bargain between us and you. This site and the information would not be provided without such limitations. No advice or information, whether oral or written, obtained by you from us through the site shall create any warranty, representation or guarantee not expressly stated in this agreement.
             <br></br>
             <br></br>
             <h5>Use of Information</h5>

             We reserve the right, and you authorize us, to the use and assignment of all information regarding Site uses by you and all information provided by you in any manner consistent with our Privacy Policy.
             <br></br>
             <br></br>
             <h5>Privacy Policy</h5>

             Our Privacy Policy, as it may change from time to time, is a part of this Agreement.
             <br></br>
             <br></br>
             <h5>Links to Other Web Sites</h5>

             The Site contains links to other Web sites. We are not responsible for the content, accuracy or opinions express in such Web sites, and such Web sites are not investigated, monitored or checked for accuracy or completeness by us. Inclusion of any linked Web site on our Site does not imply approval or endorsement of the linked Web site by us. If you decide to leave our Site and access these third-party sites, you do so at your own risk.
             <br></br>
             <br></br>
             <h5>Information and Press Releases</h5>
             The Site may contain information and press releases about us. While this information was believed to be accurate as of the date prepared, we disclaim any duty or obligation to update this information or any press releases. Information about companies other than ours contained in the press release or otherwise, should not be relied upon as being provided or endorsed by us.
          </CardText>
          
        </CardBody>
      </Card>
    </Base>
    )
  }
}

import React, { Component } from "react";
import { FaBeer,FaFacebook,FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';
import UserService from "../services/user.service";
import {
    Row,Col,Container, Card,Button
} from "reactstrap";
// import {Button} from "bootstrap";
import {Link} from "react-router-dom";
export default class PrivacyPolicy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount() {
        UserService.getPublicContent().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }

    render() {
        return (
            <Container>
            <div style={{marginTop:30}}>
                <h1>Privacy Policy</h1>
                <p>BIG DEALERSHIP Privacy Policy</p>
                <p1><strong>
                    PERSONAL INFORMATION WE COLLECT
                </strong></p1>
                <p style={{marginTop:10}}>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”</p>
                <p style={{marginTop:10}}>We collect Device Information using the following technologies:</p>

                <ul>
                    <li>“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.</li>
                    <li>“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.</li>
                    <li>“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.</li>
                </ul>
                <p style={{marginTop:10}}>Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as “Order Information.”</p>

                <p style={{marginTop:10}}>
                    When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.
                </p>

                <p1><strong>
                    <p1><strong>
                        HOW DO WE USE YOUR PERSONAL INFORMATION?
                    </strong></p1>
                </strong></p1>
                <p style={{marginTop:10}}>
                    We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
                    Communicate with you;
                    Screen our orders for potential risk or fraud; and
                    When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
                    We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
                </p>
                <p1><strong>
                    <p1><strong>
                        SHARING YOUR PERSONAL INFORMATION
                    </strong></p1>
                </strong></p1>
                <p style={{marginTop:10}}>
                    We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store–you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site–you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.

                    Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
                </p>
                <p1><strong>
                    <p1><strong>
                        YOUR RIGHTS
                    </strong></p1>
                </strong></p1>
                <p style={{marginTop:10}}>
                    If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.

                    Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.

                </p>
                <p1><strong>
                    <p1><strong>
                        CHANGES
                    </strong></p1>
                </strong></p1>


                <p style={{marginTop:10}}>
                    We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.

                </p>

                <p1><strong>
                    <p1><strong>
                        CONTACT US
                    </strong></p1>
                </strong></p1>

                <p style={{marginTop:10}}>
                    For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at big.dealership@gmail.com.
                </p>
            </div>
            </Container>

        );
    }
}

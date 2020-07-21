import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { toggleSidebar,
    hideRightSidebar,
    changeTopbarTheme,
    changeLayout,
    changeSidebarTheme,
    changeLayoutWidth,
    changeSidebarType,
    changePreloader } from '../../../store/actions';

// MetisMenu
import MetisMenu from "metismenujs";


class SidebarContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_toggle: false,
            layoutType: this.props.layoutType,
            topbarTheme: this.props.topbarTheme,
            leftSideBarTheme: this.props.leftSideBarTheme,
            layoutWidth: this.props.layoutWidth,
            sidebarType: this.props.leftSideBarType,
            isPreloader: this.props.isPreloader
        }
        this.changeLayout = this.changeLayout.bind(this);
        this.changeTopbarTheme = this.changeTopbarTheme.bind(this);
        this.changeLeftSidebarTheme = this.changeLeftSidebarTheme.bind(this);
        this.changeLayoutWidth = this.changeLayoutWidth.bind(this);
        this.changeLeftSidebarType = this.changeLeftSidebarType.bind(this);
        this.changeThemePreloader = this.changeThemePreloader.bind(this);
    }

    componentDidMount() {
        document.body.setAttribute('data-sidebar','dark');
        this.initMenu();
    }

    //update local state after changing layout
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
            layoutType: this.props.layoutType,
            topbarTheme: this.props.topbarTheme,
            leftSideBarTheme: this.props.leftSideBarTheme,
            layoutWidth: this.props.layoutWidth,
            sidebarType: this.props.leftSideBarType,
            isPreloader: this.props.isPreloader
            });
        }

        if (this.props.leftSideBarType !== prevProps.leftSideBarType) {
            this.initMenu();
        }
    }

    initMenu() {
        new MetisMenu("#side-menu");
    
          var matchingMenuItem = null;
          var ul = document.getElementById("side-menu");
          var items = ul.getElementsByTagName("a");
          for (var i = 0; i < items.length; ++i) {
            if (this.props.location.pathname === items[i].pathname) {
              matchingMenuItem = items[i];
              break;
            }
          }
          if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
          }
        
    }

    activateParentDropdown = (item) => {

        item.classList.add('mm-active');
        const parent0 =  item.parentElement;
        if (parent0) {
            parent0.classList.add('mm-active'); // li 
            const parent = parent0.parentElement;

            if (parent) {
                parent.classList.add('mm-active'); // li 
                parent.classList.add("mm-show");
                const parent2 = parent.parentElement;

                if (parent2) {
                    parent2.classList.add("mm-show");
                    parent2.classList.add("mm-active");
                
                    const parent3 = parent2.parentElement;

                    if (parent3) {
                        parent3.classList.add('mm-active'); // li
                        parent3.classList.add("mm-show");
                        parent3.childNodes[0].classList.add('mm-active'); //a
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            parent4.classList.add('mm-active');
                        }
                    }
                }
                return false;
            }
            return false;
        }
        return false
    }
    //change layput type and dispatch action
    changeLayout() {
        this.props.changeLayout("horizontal");
    }

    //theme preloader
    changeThemePreloader = (value) => {
        this.props.changePreloader(!this.props.isPreloader);
    }

    //change left sidebar theme
    changeLeftSidebarTheme(value) {
            this.props.changeSidebarTheme(value);
    }

    //change layout width
    changeLayoutWidth(value) {
        if(this.state.layoutWidth === "boxed")
            this.props.changeLayoutWidth("fluid", this.state.layoutType);
        else
        this.props.changeLayoutWidth("boxed", this.state.layoutType);
    }

    //change topbar theme and dispatch action
    changeTopbarTheme(value) {
            this.props.changeTopbarTheme(value);
    }

    //change sidebar type
    changeLeftSidebarType(value) {
            this.props.changeSidebarType(value);
    }

    render() {
        return (
            <React.Fragment>
                <div id="sidebar-menu">
    
    <ul className="metismenu list-unstyled" id="side-menu">
        <li className="menu-title">Main</li>

        <li>
            <Link to="/dashboard" className="waves-effect">
                <i className="mdi mdi-view-dashboard"></i>
                <span>Dashboard</span>
            </Link>
        </li>

        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-credit-card-outline"></i>
                <span>Payments</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li><Link to="/payments">Payments</Link></li>
                <li><Link to="/subscription">Subscription</Link></li>
                <li><Link to="/agreement">Billing Agreements</Link></li>
                <li><Link to="/gateways">Payment Gateways</Link></li>
                <li><Link to="/taxes">Taxes</Link></li>
                <li><Link to="/exports">Exports</Link></li>
            </ul>
        </li>

        <li>
            <Link to="/statistics" className="waves-effect">
                <i className="mdi mdi-chart-areaspline-variant"></i>
                <span>Statistics</span>
            </Link>
        </li>

        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-account-supervisor"></i>
                <span>Players</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                    <li><Link to="/lookup">Player Lookup</Link></li>
                    <li><Link to="/bans">Banned Players</Link></li>
                    <li><Link to="/whitelist">Whitelisted Players</Link></li>
            </ul>
        </li>

        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="fas fa-shopping-basket"></i>
                <span>Webstore</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                    <li><Link to="/packages">Packages</Link></li>
                    <li><Link to="/variables">Variables</Link></li>
                    <li><Link to="/pages">Pages</Link></li>
                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <span>Design</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                                <li><Link to="/design/appearence">Appearence</Link></li>
                                <li><Link to="/design/preferences">Preferences</Link></li>
                                <li><Link to="/webstorecontent/homepage">Homepage</Link></li>
                                <li><Link to="/design/sidebar">Sidebar</Link></li>
                                <li><Link to="/ToS">Terms and Conditions</Link></li>
                                <li><Link to="/webstorecontent/paymentcomplete">Payment Complete Page</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <span>Basket Settings</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                                <li><Link to="/basketsettings/gifting">Allow Gifting</Link></li>
                                <li><Link to="/basketsettings/free">Free Baskets</Link></li>
                                <li><Link to="/basketsettings/minimum">Minimum Basket Amount</Link></li>
                                <li><Link to="/basketsettings/details">Required Billing Details</Link></li>
                                <li><Link to="/basketsettings/coupons">Maximum Coupons Per Basket</Link></li>
                                <li><Link to="/giftcards/honour">Honour 3rd Party Gift Cards</Link></li>
                                <li><Link to="/orderstatuspage">Disable Order Status Page</Link></li>
                                <li><Link to="/basketsettings/add-to-cart-redirect">Add to Basket Redirect</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/translations">Translations</Link></li>
                    <li><Link to="/currency">Currency</Link></li>
                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <span>Emails</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                                <li><Link to="/emailsettings/storenote">Store Email Note</Link></li>
                                <li><Link to="/emailsettings/cc">CC Emails</Link></li>
                                <li><Link to="/emailsettings/disable">Disable Emails</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/settings/domain-name">Domain</Link></li>
            </ul>
        </li>

        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="fas fa-terminal"></i>
                <span>Commands</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li><Link to="/commands/global">Global Commands</Link></li>
                <li><Link to="/actions/global">Global Discord Actions</Link></li>
                <li><Link to="/commands/expiry">Command Expiry</Link></li>
                <li><Link to="/commands/resend">Resend Commands</Link></li>
            </ul>
        </li>

        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-shield-check"></i>
                <span>Fraud</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li><Link to="/settings/chargebacks">Charge Back Prevention</Link></li>
                <li><Link to="/giftcards/chargebacks">Gift Card Purchase Chargebacks</Link></li>
                <li><Link to="/Settings/chargebacks/pendingcommands">Pending Commands</Link></li>
                <li><Link to="/Settings/chargebacks/resolution">Chargeback Resolution Behaviour</Link></li>
                <li><Link to="/Settings/chargebacks/spendinglimit">Spending Limit</Link></li>
                <li><Link to="/Settings/chargebacks/geoip">GEO-IP Address Verification</Link></li>
                <li><Link to="/ipchecks">IP Checks</Link></li>
            </ul>
        </li>

        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-bullhorn"></i>
                <span>Engagement</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li><Link to="/coupons">Coupons</Link></li>
                <li><Link to="/sales">Sales</Link></li>
                <li><Link to="/giftcards">Gift Cards</Link></li>
                <li><Link to="/community-goals">Community Goals</Link></li>
                <li><Link to="/player-referrals">Player Referrals</Link></li>
                <li><Link to="/recovery">Abandoned Basket Recovery</Link></li>
                <li><Link to="/purchasefollowup">Purchase Follow-ups</Link></li>
                <li><Link to="/referrals">Webstore Referrals</Link></li>
            </ul>
        </li>

        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-power-plug"></i>
                <span>Integrations</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li><Link to="/plugins">Plugins</Link></li>
                <li><Link to="/settings/servers">Servers</Link></li>
                <li><Link to="/webhooks">Webhooks</Link></li>
                <li><Link to="/player-verification">Player Verification</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
                <li><Link to="/api-keys">API Keys</Link></li>
            </ul>
        </li>

        <li>
            <Link to="/shields" className="waves-effect">
                <i className="mdi mdi-account-group"></i>
                <span>Shields</span>
            </Link>
        </li>

        <li>
            <Link to="/privacy" className="waves-effect">
                <i className="mdi mdi-lock"></i>
                <span>Privacy</span>
            </Link>
        </li>

        <li>
            <Link to="/team" className="waves-effect">
                <i className="mdi mdi-account-group"></i>
                <span>Team</span>
            </Link>
        </li>

        <li>
            <Link to="/billing" className="waves-effect">
                <i className="fas fa-wallet"></i>
                <span>Billing</span>
            </Link>
        </li>

        <li className="menu-title">Your Favourites</li>

        {/* TODO: favorite pages */}

        <li className="menu-title">Your Profile</li>

        <li>
            <Link to="/webstores" className="waves-effect">
                <i className="mdi mdi-store"></i>
                <span>Webstores</span>
            </Link>
        </li>

        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-settings"></i>
                <span>Settings</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link to="/profile/log">Activity Log</Link></li>
                <li><Link to="/accountsettings/tfa">Two Factor Authentication</Link></li>
                <li><Link to="/profile/emails">Email Preferences</Link></li>
            </ul>
        </li>

    </ul>
</div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { is_toggle, leftSideBarType, layoutType, leftSideBarTheme, layoutWidth, topbarTheme, isPreloader } = state.Layout;
    return {  is_toggle, leftSideBarType, layoutType, leftSideBarTheme, layoutWidth, topbarTheme, isPreloader };
}

export default withRouter(connect(mapStatetoProps, {
    toggleSidebar,
    hideRightSidebar,
    changeLayout,
    changeTopbarTheme,
    changeSidebarTheme,
    changeLayoutWidth,
    changeSidebarType,
    changePreloader
})(SidebarContent));

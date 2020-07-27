import React from "react";
import { Redirect } from "react-router-dom";

// Auth Pages
import Pageslogin from '../pages/Authentication/Login';
import Logout from '../pages/Authentication/Logout';
import Pagesregister from '../pages/Authentication/Register';
import ForgetPassword from '../pages/Authentication/ForgetPassword';
import LockScreen from "../pages/Authentication/pages-lock-screen";

//Errors Pages
import Pages404 from "../pages/Extra Pages/pages-404";
import Pages500 from "../pages/Extra Pages/pages-500";

//Dashboard
import Dashboard from '../pages/buytale_pages/Dashboard/dashboard';

//Payments
import Payments from '../pages/buytale_pages/Payments/Payments';
import Subscription from '../pages/buytale_pages/Payments/Subscription';
import Agreement from '../pages/buytale_pages/Payments/Agreement';
import Gateway from '../pages/buytale_pages/Payments/Gateway';
import Taxes from '../pages/buytale_pages/Payments/Taxes';
import Exports from '../pages/buytale_pages/Payments/Exports';
import Create from '../pages/buytale_pages/Payments/Create';
import Export from '../pages/buytale_pages/Payments/Export';

//Statistics
import Statistics from '../pages/buytale_pages/Statistics/Statistics';

//Players
import Lookup from '../pages/buytale_pages/Players/Lookup';
import Bans from '../pages/buytale_pages/Players/Bans';
import WhiteList from '../pages/buytale_pages/Players/WhiteList';

//Webstore
import Packages from '../pages/buytale_pages/Webstore/Packages';
import Variables from '../pages/buytale_pages/Webstore/Variables';
import Pages from '../pages/buytale_pages/Webstore/Pages';
//Webstore => Design
import Appearence from '../pages/buytale_pages/Webstore/Design/Appearence';
import Preferences from '../pages/buytale_pages/Webstore/Design/Preferences';
import HomePage from '../pages/buytale_pages/Webstore/Design/HomePage';
import SideBar from '../pages/buytale_pages/Webstore/Design/SideBar';
import ToS from '../pages/buytale_pages/Webstore/Design/ToS';
import PaymentComplete from '../pages/buytale_pages/Webstore/Design/PaymentComplete';

//Webstore => Basket Settings
import Gifting from '../pages/buytale_pages/Webstore/Basket/Gifting';
import Free from '../pages/buytale_pages/Webstore/Basket/Free';
import Minimum from '../pages/buytale_pages/Webstore/Basket/Minimum';
import Details from '../pages/buytale_pages/Webstore/Basket/Details';
import BasketCoupons from '../pages/buytale_pages/Webstore/Basket/BasketCoupons';
import Honour from '../pages/buytale_pages/Webstore/Basket/Honour';
import OrderStatusPage from '../pages/buytale_pages/Webstore/Basket/OrderStatusPage';
import AddToBasketRedirect from '../pages/buytale_pages/Webstore/Basket/AddToBasketRedirect';

import Translations from '../pages/buytale_pages/Webstore/Translations';
import Currency from '../pages/buytale_pages/Webstore/Currency';

//Webstore => Emails
import StoreNote from '../pages/buytale_pages/Webstore/Emails/StoreNote';
import CC from '../pages/buytale_pages/Webstore/Emails/CC';
import Disable from '../pages/buytale_pages/Webstore/Emails/Disable';

import DomainName from '../pages/buytale_pages/Webstore/DomainName';

//Commands
import Global from '../pages/buytale_pages/Commands/Global';
import AcionsGlobal from '../pages/buytale_pages/Commands/AcionsGlobal';
import Expiry from '../pages/buytale_pages/Commands/Expiry';
import Resend from '../pages/buytale_pages/Commands/Resend';

//Fraud
import ChargeBacks from '../pages/buytale_pages/Fraud/ChargeBacks';
import GiftChargeBacks from '../pages/buytale_pages/Fraud/GiftChargeBacks';
import PendingCommands from '../pages/buytale_pages/Fraud/PendingCommands';
import Resolution from '../pages/buytale_pages/Fraud/Resolution';
import SpendingLimit from '../pages/buytale_pages/Fraud/SpendingLimit';
import GeoIp from '../pages/buytale_pages/Fraud/GeoIp';
import IpChecks from '../pages/buytale_pages/Fraud/IpChecks';

//Engagement
import Coupons from '../pages/buytale_pages/Engagement/Coupons';
import Sales from '../pages/buytale_pages/Engagement/Sales';
import GiftCards from '../pages/buytale_pages/Engagement/GiftCards';
import CommunityGoals from '../pages/buytale_pages/Engagement/CommunityGoals';
import PlayerReferrals from '../pages/buytale_pages/Engagement/PlayerReferrals';
import Recovery from '../pages/buytale_pages/Engagement/Recovery';
import PurchaseFollowUp from '../pages/buytale_pages/Engagement/PurchaseFollowUp';
import Referrals from '../pages/buytale_pages/Engagement/Referrals';

//Integrations
import Plugins from '../pages/buytale_pages/Integrations/Plugins';
import Servers from '../pages/buytale_pages/Integrations/Servers';
import Webhooks from '../pages/buytale_pages/Integrations/Webhooks';
import PlayerVerification from '../pages/buytale_pages/Integrations/PlayerVerification';
import Notifications from '../pages/buytale_pages/Integrations/Notifications';
import ApiKey from '../pages/buytale_pages/Integrations/ApiKey';

//Statistics
import Shields from '../pages/buytale_pages/Shields/Shields';

//Statistics
import Privacy from '../pages/buytale_pages/Privacy/Privacy';

//Statistics
import Team from '../pages/buytale_pages/Team/Team';

//Statistics
import Billing from '../pages/buytale_pages/Billing/Billing';

// Your Profile
//Webstores
import Webstores from '../pages/buytale_pages/Webstores/Webstores';

//Settings
import Profile from '../pages/buytale_pages/Settings/Profile';
import Log from '../pages/buytale_pages/Settings/Log';
import Tfa from '../pages/buytale_pages/Settings/Tfa';
import Emails from '../pages/buytale_pages/Settings/Emails';

const authProtectedRoutes = [
  // DashBoard
  { path: "/dashboard", component: Dashboard },

  // Payments
  { path: "/payments", component: Payments },
  { path: "/payments/create", component: Create },
  { path: "/payments/export", component: Export },
  { path: "/subscription", component: Subscription },
  { path: "/agreement", component: Agreement },
  { path: "/gateways", component: Gateway },
  { path: "/taxes", component: Taxes },
  { path: "/exports", component: Exports },

  // Statistics
  { path: "/statistics", component: Statistics },

  // Players
  { path: "/lookup", component: Lookup },
  { path: "/bans", component: Bans },
  { path: "/whitelist", component: WhiteList },

  // Webstore
  { path: "/packages", component: Packages },
  { path: "/variables", component: Variables },
  { path: "/pages", component: Pages },

  // Webstore => Design
  { path: "/design/appearence", component: Appearence },
  { path: "/design/preferences", component: Preferences },
  { path: "/webstorecontent/homepage", component: HomePage },
  { path: "/design/sidebar", component: SideBar },
  { path: "/ToS", component: ToS },
  { path: "/webstorecontent/paymentcomplete", component: PaymentComplete },

  // Webstore => Basket Settings
  { path: "/basketsettings/gifting", component: Gifting },
  { path: "/basketsettings/free", component: Free },
  { path: "/basketsettings/minimum", component: Minimum },
  { path: "/basketsettings/details", component: Details },
  { path: "/basketsettings/coupons", component: BasketCoupons },
  { path: "/giftcards/honour", component: Honour },
  { path: "/orderstatuspage", component: OrderStatusPage },
  { path: "/basketsettings/add-to-cart-redirect", component: AddToBasketRedirect },

  { path: "/settings/translations", component: Translations },
  { path: "/design/currency", component: Currency },

  // Webstore => Emails
  { path: "/emailsettings/storenote", component: StoreNote },
  { path: "/emailsettings/cc", component: CC },
  { path: "/emailsettings/disable", component: Disable },

  { path: "/settings/domain-name", component: DomainName },

  // Commands
  { path: "/commands/global", component: Global },
  { path: "/actions/global", component: AcionsGlobal },
  { path: "/commands/expiry", component: Expiry },
  { path: "/commands/resend", component: Resend },

  // Fraud
  { path: "/settings/chargebacks", component: ChargeBacks },
  { path: "/giftcards/chargebacks", component: GiftChargeBacks },
  { path: "/Settings/chargebacks/pendingcommands", component: PendingCommands },
  { path: "/Settings/chargebacks/resolution", component: Resolution },
  { path: "/Settings/chargebacks/spendinglimit", component: SpendingLimit },
  { path: "/Settings/chargebacks/geoip", component: GeoIp },
  { path: "/ipchecks", component: IpChecks },

  // Engagement
  { path: "/coupons", component: Coupons },
  { path: "/sales", component: Sales },
  { path: "/giftcards", component: GiftCards },
  { path: "/community-goals", component: CommunityGoals },
  { path: "/player-referrals", component: PlayerReferrals },
  { path: "/recovery", component: Recovery },
  { path: "/purchasefollowup", component: PurchaseFollowUp },
  { path: "/referrals", component: Referrals },

  // Integrations
  { path: "/plugins", component: Plugins },
  { path: "/settings/servers", component: Servers },
  { path: "/webhooks", component: Webhooks },
  { path: "/player-verification", component: PlayerVerification },
  { path: "/notifications", component: Notifications },
  { path: "/api-keys", component: ApiKey },

  // Shields
  { path: "/shields", component: Shields },

  // Privacy
  { path: "/privacy", component: Privacy },

  // Team
  { path: "/team", component: Team },
  
  // Billing
  { path: "/billing", component: Billing },


  //Webstores
  { path: "/webstores", component: Webstores },

  //Settings
  { path: "/Profile", component: Profile },
  { path: "/profile/log", component: Log },
  { path: "/accountsettings/tfa", component: Tfa },
  { path: "/profile/emails", component: Emails },

  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Pageslogin },
  { path: "/register", component: Pagesregister },
  { path: '/forget-password', component: ForgetPassword },
  { path: '/lock-screen', component: LockScreen },
  { path: "/404", component: Pages404 },
  { path: "/500", component: Pages500 },
];

export { authProtectedRoutes, publicRoutes };

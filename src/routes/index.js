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
import Dashboard from '../pages/Dashboard/dashboard';

//Payments
import Payments from '../pages/buytale_pages/Payments/Payments';
import Subscription from '../pages/buytale_pages/Payments/Subscription';
import Agreement from '../pages/buytale_pages/Payments/Agreement';
import Gateway from '../pages/buytale_pages/Payments/Gateway';
import Taxes from '../pages/buytale_pages/Payments/Taxes';
import Exports from '../pages/buytale_pages/Payments/Exports';

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
import Coupons from '../pages/buytale_pages/Webstore/Basket/Coupons';
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

const authProtectedRoutes = [
  // DashBoard
  { path: "/dashboard", component: Dashboard },

  // Payments
  { path: "/payments", component: Payments },
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
  { path: "/basketsettings/coupons", component: Coupons },
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

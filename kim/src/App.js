import React from "react";
import { Switch, Route } from "react-router-dom";
import NK from "./pages/NK/";
import TW from "./pages/TW/";
import NL from "./pages/NL/";

function App() {
    return (
        <React.Fragment>
            <Switch>
                <ApplicationRoute exact path="/" component={NK} />
                <ApplicationRoute exact path="/NK" component={NK} />
                <ApplicationRoute exact path="/TW" component={TW} />
                <ApplicationRoute exact path="/NL" component={NL} />
            </Switch>
            <nav style={{ display: "none" }}>
                <img src="/pic/NK/value/value_1.png" alt="" />
                <img src="/pic/NK/value/value_2.png" alt="" />
                <img src="/pic/NK/value/value_3.png" alt="" />
                <img src="/pic/NK/value/value_4.png" alt="" />
                <img src="/pic/NK/advancement/book.png" alt="" />
                <img src="/pic/NK/advancement/clock.png" alt="" />
                <img src="/pic/NK/advancement/jonko.png" alt="" />
                <img src="/pic/NK/advancement/mil.png" alt="" />
                <img src="/pic/NK/attire/1.png" alt="" />
                <img src="/pic/NK/attire/2.png" alt="" />
                <img src="/pic/NK/attire/3.png" alt="" />
                <img src="/pic/NK/attire/4.png" alt="" />
                <img src="/pic/NK/emblem/embassy.png" alt="" />
                <img src="/pic/NK/emblem/emblem.png" alt="" />
                <img src="/pic/NK/emblem/passport.png" alt="" />
                <img src="/pic/NK/emblem/passport2.png" alt="" />
                <img src="/pic/NK/LOGO/bad_logo_one.png" alt="" />
                <img src="/pic/NK/LOGO/bad_logo_two.png" alt="" />
                <img src="/pic/NK/LOGO/good_logo_one.png" alt="" />
                <img src="/pic/NK/LOGO/good_logo_two.png" alt="" />
                <img src="/pic/NK/LOGO/il_sung_2.png" alt="" />
                <img src="/pic/NK/LOGO/jun_un_2.png" alt="" />
                <img src="/pic/NK/LOGO/jung_il_2.png" alt="" />
                <img src="/pic/NK/typo/typo1.png" alt="" />
                <img src="/pic/NK/typo/typo2.png" alt="" />
                <img src="/pic/NK/flag.png" alt="" />
                <img src="/pic/NK/flag_a.png" alt="" />
                <img src="/pic/NK/gary.png" alt="" />
                <img src="/pic/NK/gary_a.png" alt="" />
                <img src="/pic/NK/group.png" alt="" />
                <img src="/pic/NK/map.png" alt="" />
                <img src="/pic/NK/map_a.png" alt="" />
                <img src="/pic/NK/NK_LOGO_FIN.png" alt="" />
                <img src="/pic/NK/NK_LOGO_FIN_a.png" alt="" />
                <img src="/pic/NK/social.png" alt="" />
                <img src="/pic/NK/typo.png" alt="" />
                <img src="/pic/NK/typo_a.png" alt="" />
                <img src="/pic/NL/1.png" alt="" />
                <img src="/pic/NL/1_a.png" alt="" />
                <img src="/pic/NL/2.png" alt="" />
                <img src="/pic/NL/2_a.png" alt="" />
                <img src="/pic/NL/3.png" alt="" />
                <img src="/pic/NL/3_a.png" alt="" />
                <img src="/pic/NL/4.png" alt="" />
                <img src="/pic/NL/4_a.png" alt="" />
                <img src="/pic/NL/5.png" alt="" />
                <img src="/pic/NL/5_a.png" alt="" />
                <img src="/pic/NL/Value/1300_1500.png" alt="" />
                <img src="/pic/NL/Value/1500_1700.png" alt="" />
                <img src="/pic/NL/Value/1700_1900.png" alt="" />
                <img src="/pic/NL/Value/1900_2000.png" alt="" />
                <img src="/pic/NL/Value/arub.png" alt="" />
                <img src="/pic/NL/Value/saba.png" alt="" />
                <img src="/pic/NL/Value/sint_maarten.png" alt="" />
                <img src="/pic/NL/Value/curacao.png" alt="" />
                <img src="/pic/NL/monarchy/Image 23@2x.png" alt="" />
                <img src="/pic/NL/monarchy/IMG_0058.png" alt="" />
                <img src="/pic/NL/monarchy/IMG_0063@2x.png" alt="" />
                <img src="/pic/NL/monarchy/Rectangle 217@2x.png" alt="" />
                <img src="/pic/NL/monarchy/Rectangle 243@2x.png" alt="" />
                <img src="/pic/NL/monarchy/Rectangle 244@2x.png" alt="" />
                <img src="/pic/NL/monarchy/tennou@2x.png" alt="" />
                <img src="/pic/NL/color/flag@2x.png" alt="" />
                <img src="/pic/NL/color/color variation@2x.png" alt="" />
                <img src="/pic/NL/coat of arms/Image 4.png" alt="" />
                <img src="/pic/NL/coat of arms/Image 5.png" alt="" />
                <img src="/pic/NL/coat of arms/Image 6.png" alt="" />
                <img src="/pic/NL/coat of arms/Image 7.png" alt="" />
                <img src="/pic/NL/coat of arms/Image 45@2x.png" alt="" />
                <img src="/pic/NL/coat of arms/Image 45@2x.png" alt="" />
                <img src="/pic/NL/coat of arms/Rectangle 247@2x.png" alt="" />
                <img src="/pic/NL/coat of arms/shirt@2x.png" alt="" />
                <img src="/pic/NL/frugality/Group 140@2x.png" alt="" />
                <img src="/pic/NL/frugality/Image-56@2x.png" alt="" />
                <img src="/pic/NL/frugality/piekfijn@2x.png" alt="" />
                <img src="/pic/NL/frugality/tend.png" alt="" />
                <img src="/pic/NL/sanwich/222.png" alt="" />
                <img src="/pic/NL/sanwich/Rectangle 225.png" alt="" />
                <img src="/pic/NL/sanwich/Rectangle 226.png" alt="" />
                <img src="/pic/NL/sanwich/Rectangle 227.png" alt="" />
                <img src="/pic/NL/sanwich/Rectangle 228.png" alt="" />
                <img src="/pic/NL/sanwich/Rectangle 229.png" alt="" />
                <img src="/pic/NL/sanwich/Rectangle 230.png" alt="" />
                <img src="/pic/NL/weather/good weather@2x.png" alt="" />
                <img src="/pic/NL/weather/Group 139@2x.png" alt="" />
                <img src="/pic/NL/weather/Image 65@2x.png" alt="" />
                <img src="/pic/NL/weather/Image-45@2x@2x.png" alt="" />
                <img src="/pic/NL/weather/pngwave@2x.png" alt="" />
                <img src="/pic/NL/weather/wind-2@2x.png" alt="" />
            </nav>
        </React.Fragment>
    );
}

export default App;

function ApplicationRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            component={(props) => (
                <React.Fragment>
                    <Component {...props} />
                </React.Fragment>
            )}
        />
    );
}

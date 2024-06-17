import {
    createBrowserRouter,
    redirect,
} from "react-router-dom";

import Home from "@/pages/web";

import { Auth } from "@/components/auth/layout";
import { Login } from "@/pages/auth/login";
import { Register } from "@/pages/auth/register";

import { App } from "@/components/app/layout";
import { Dashboard } from "@/pages/app/dashboard";

import { Occasion } from "@/components/occasions/layout";
import { Guests as GuestList } from "@/pages/app/occasions/guests";
import { Events } from "@/pages/app/occasions/events";

import { Index as Guests } from "@/pages/app/guests/index";

import Error from "@/pages/error";

export default createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "event/:id",
        element: <div>About</div>,
    },
    {
        path: "auth",
        element: <Auth />,
        errorElement: <Error />,
        children: [ 
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
              path: "logout",
              async action() {
                await logout();
                return redirect("/");
              },
            },
        ],
    },
    {
        path: "app",
        element: <App />,
        errorElement: <Error />,
        children: [ 
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: ":occasion",
                element: <Occasion />,
                children: [ 
                    {
                        path: "guests",
                        element: <GuestList />,
                    },
                    {
                        path: "events",
                        element: <Events />,
                    },
                ],
            },
            {
                path: "guests",
                element: <Guests />
            },
        ],
    },
]);

import {Tabs} from 'expo-router';
import React from 'react';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {atom} from "nanostores";
import {useStore} from "@nanostores/react";
type UserType = {
    name: string,
    login: string,
    id: number,
    level: number
}
type TestResult = {

}
export const $auth = atom<UserType | null>(null)
export const $testResult = atom<TestResult | null>(null)
export const $counter = atom<number>(0)
const AUTH_TABS = [
    {
        name: "index",
        options: {
            title: 'Home',
            // @ts-ignore
            tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}/>
            ),
        }
    },
    {
        name: "profile",
        options: {
            title: 'profile',
            // @ts-ignore
            tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
            ),
        }
    },
    {
        name: "[subject]",
        options: {
            title: 'Subject',
            // @ts-ignore
            tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
            ),
        }
    },
    {
        name: "tests/[test]",
        options: {
            href: null,
            title: 'tests/[tests]',
            // @ts-ignore
            tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
            ),
        }
    },
    {
        name: "register",
        options: {
            title: 'register',
            href: null,
            // @ts-ignore
            tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
            ),
        }
    },
    {
        name: "tests/result",
        options: {
            title: 'Results',
            href: null,
            // @ts-ignore
            tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
            ),
        }
    },
    {
        name: "LoginForm",
        options: {
            title: 'Login',
            href: null,
            // @ts-ignore
            tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
            ),
        }
    }
]

const UNAUTH_TABS = [
    {
        name: "index",
        options: {
            href: null,
            title: 'Home',
            // @ts-ignore
            tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}/>
            ),
        }
    },
    {
        name: "profile",
        options: {
            href: null,
            title: 'profile',
            // @ts-ignore
            tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
            ),
        }
    },
    {
        name: "[subject]",
        options: {
            href: null,
            title: 'Subject',
            // @ts-ignore
            tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
            ),
        }
    },
    {
        name: "tests/[test]",
        options: {
            href: null,
            title: 'tests/[tests]',
            // @ts-ignore
            tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
            ),
        }
    },
    {
        name: "register",
        options: {
            title: 'register',
            // @ts-ignore
            tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
            ),
        }
    },
    {
        name: "LoginForm",
        options: {
            title: 'Login',
            // @ts-ignore
            tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
            ),
        }
    },
    {
        name: "tests/result",
        options: {
            title: 'Result',
            href: null,
            // @ts-ignore
            tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
            ),
        }
    }
]
export default function TabLayout() {
    const colorScheme = useColorScheme();
    const user = useStore($auth)

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}>

            {
                user ? AUTH_TABS.map(
                    tab => (
                        <Tabs.Screen
                            key={tab.name}
                            name={tab.name}
                            options={tab.options}
                        />
                    )
                ) : UNAUTH_TABS.map(
                    tab => (
                        <Tabs.Screen
                            key={tab.name}
                            name={tab.name}
                            options={tab.options}
                        />
                    )
                )
            }
        </Tabs>
    );
}

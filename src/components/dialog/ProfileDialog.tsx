"use client"

import React from "react";

// import components
import UserDetail from "@/src/components/user/UserDetail";
import { DropdownMenuItem } from "@/src/components/ui/dropdown-menu";
import UpdateUserDetail from "@/src/components/user/UpdateUserDetail";
import { Dialog, DialogTrigger, DialogContent } from "@/src/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"

// import types
import { UserType } from "@/drizzle/schema/user.schema";

// prop type
type ProfileDialogPropsType = {
    user: UserType;
}

const ProfileDialog: React.FC<ProfileDialogPropsType> = ({ user }) => {

    if (!user) {
        return null;
    }

    return (
        <Dialog>
            <DialogTrigger 
                className="
                    w-full p-[1.25rem] text-[1.25rem] flex gap-[1rem] rounded-[1rem] cursor-pointer hover:bg-gray-100
                    dark:hover:bg-[var(--dmode-black-primary)]
                "
            >
                <i className="fa-solid fa-user"></i>
                <span>Profile</span>
            </DialogTrigger>

            <DialogContent className="min-w-[40rem] p-[3rem] dark:bg-[var(--dmode-black-primary)] dark:border-[var(--dmode-black-primary)]">
                <Tabs defaultValue="account detail" className="w-full">
                    <TabsList className="h-auto w-full p-[0.5rem] grid grid-cols-2 rounded-[0.5rem]">
                        <TabsTrigger value="account detail" className="text-[1.25rem] rounded-[0.5rem]">Account Detail</TabsTrigger>
                        <TabsTrigger value="change detail" className="text-[1.25rem] rounded-[0.5rem]">Change Detail</TabsTrigger>
                    </TabsList>

                    <TabsContent value="account detail">
                        <UserDetail user={user} />
                    </TabsContent>

                    <TabsContent value="change detail">
                        <UpdateUserDetail />
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    )
}

export default ProfileDialog;
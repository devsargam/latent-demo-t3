"use client";

import { signOut } from "next-auth/react";

export async function signout() {
  await signOut();
}

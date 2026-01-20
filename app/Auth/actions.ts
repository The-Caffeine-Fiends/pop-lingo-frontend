"use server";

import { signOut } from "./Auth";

export async function signOutAction() {
  await signOut();
}

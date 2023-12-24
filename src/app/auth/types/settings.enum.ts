export enum SettingsEnum {
    account = "Account ",
    myOrders = "My Orders",
    logout = "Logout",
    signIn = "Log in",
}

export interface ISettings {
    account: SettingsEnum.account,
    myOrders: SettingsEnum.myOrders,
    logout: SettingsEnum.logout,
    signIn: SettingsEnum.signIn,
}
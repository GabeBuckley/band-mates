export interface IBandMember {
    id: number;
    name?: string;
    instrument?: string;
}

export interface IBandConfiguration {
    id: number;
    name?: string;
    members: Array<IBandMember>;
}


export interface IBand {
    id: number;
    name?: string;
    configurations: Array<IBandConfiguration>;
}


export interface IServiceProvider {
    id: number;
    name?: string;
}

export interface IVenue {
    id: number;
    name?: string;
}

export interface IUserData {
    name?: string;
    email?: string;
}


export interface IUser {
    id?: number;
    username: string;
    userData: IUserData;
    displayName?: string;

    bands?: Array<IBand>;
    serviceProviders?: Array<IServiceProvider>;
    venues?: Array<IVenue>;
}















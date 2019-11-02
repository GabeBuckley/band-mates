
export interface IBandRole {
    id: number;
    name?: string;
}
export interface IBandMember {
    id: number;
    name?: string;
    roles?: Array<IBandRole>;
}


export interface IServiceProvider {
    id: number;
    name?: string;
}

export interface IVenue {
    id: number;
    name?: string;
}




export interface IUser {

    id?: number;
    username?: string;
    name?: string;
    email: string;
    passwordHash: string;

    bands?: Array<IBand>;
    serviceProviders?: Array<IServiceProvider>;
    venues?: Array<IVenue>;

    avatar?: string;
}

export interface IBandConfiguration {
    id: number;
    name?: string;

    members?: Array<IBandMember>;
}

export interface IBand {
    id: number;
    name?: string;
    slug?: string;
    configurations: Array<IBandConfiguration>;
}













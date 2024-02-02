import { State } from "@ngxs/store";

export interface AppStateModel {
    username: string;
    orderId: number;
    status?: 'pending' | 'confirmed' | 'declined';
}

@State<AppStateModel>({
    name: 'app',
    defaults: {
        username: '',
        orderId: Math.floor(Math.random() * 23000)
    }
})
export class AppState {
}

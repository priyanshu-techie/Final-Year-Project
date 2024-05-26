import { create } from "zustand"

interface sidebarState{
    sidebarClose:boolean;
    setSidebarClose:any;
}

export  const useSidebarState = create<sidebarState>((set)=>({
    sidebarClose:false,
    setSidebarClose(state:boolean){
        set({sidebarClose:state},false);
    }
}))
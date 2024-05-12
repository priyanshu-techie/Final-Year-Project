import { useState } from "react";

function useSidebarState(){
    const [sidebarClose, setSidebarClose] = useState(false);
    return {sidebarClose, setSidebarClose};
}
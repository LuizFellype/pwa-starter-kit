'use client';

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const PWAInstallPrompt = () => {
    const [hideInstallButton, setHideInstallButton] = useState<boolean>(true);
    const installPrompt = useRef<any | undefined>(undefined)

    function disableInAppInstallPrompt() {
        installPrompt.current = null;
        setHideInstallButton(true)
    }

    useEffect(() => {
        const onBefore = (event: Event) => {
            event.preventDefault();
            installPrompt.current = event;
            setHideInstallButton(false)
        }
        window.addEventListener("beforeinstallprompt", onBefore);
        window.addEventListener("appinstalled", disableInAppInstallPrompt);
        return () => {
            window.removeEventListener('beforeinstallprompt', onBefore)
            window.removeEventListener("appinstalled", disableInAppInstallPrompt);
        }
    }, [])

    const handleInstall = async () => {
        if (!installPrompt.current) {
            return;
        }
        await installPrompt.current.prompt?.();
        disableInAppInstallPrompt();
    }


    return (
        <div className="flex justify-center">
            {hideInstallButton  ? null : <Button disabled={hideInstallButton} onClick={handleInstall}>Install APP</Button>}
        </div>
    );
};

export default PWAInstallPrompt;

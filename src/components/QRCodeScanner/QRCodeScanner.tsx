import { View, Modal, Alert } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Button } from "@rneui/base";
import { useState, useRef, useEffect } from "react";
import { style } from "./style";

interface QRCodeScannerProps {
    isVisible: boolean;
    onClose: () => void;
    onScan: (data: string) => void;
}

export default function QRCodeScanner({ isVisible, onClose, onScan }: QRCodeScannerProps) {
    const [permission, requestPermission] = useCameraPermissions();
    const [isCameraActive, setIsCameraActive] = useState(true);
    const qrCodeLock = useRef(false);

    useEffect(() => {
        if (!isVisible) {
            qrCodeLock.current = false;
            setIsCameraActive(true);
        }
    }, [isVisible]);

    async function handleOpenCamera() {
        const { granted } = await requestPermission();
        if (!granted) {
            return Alert.alert("Câmera", "Você precisa habilitar a permissão da câmera!");
        }
    }

    function handleBarcodeScanned({ data }: { data: string }) {
        if (data && !qrCodeLock.current) {
            qrCodeLock.current = true;
            setIsCameraActive(false);
            onScan(data);
            setTimeout(() => {
                qrCodeLock.current = false;
                setIsCameraActive(true);
            }, 2000);
        }
    }

    return (
        <Modal visible={isVisible} style={{ flex: 1 }} onShow={handleOpenCamera}>
            {isCameraActive && (
                <CameraView
                    style={{ flex: 1 }}
                    facing="back"
                    onBarcodeScanned={handleBarcodeScanned}
                />
            )}
            <View style={style.footer}>
                <Button buttonStyle={style.cancelButton} title="Cancelar" onPress={onClose} />
            </View>
        </Modal>
    );
}
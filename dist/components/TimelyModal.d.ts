import React from 'react';
export interface StylesDictionary {
    [Key: string]: React.CSSProperties;
}
interface TimelyModalProps {
    isOpen: boolean;
    onClose: () => void;
}
declare const TimelyModal: React.FC<TimelyModalProps>;
export default TimelyModal;

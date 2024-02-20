import React, { PropsWithChildren } from 'react';
export interface StylesDictionary {
    [Key: string]: React.CSSProperties;
}
interface TimelyModalProps extends PropsWithChildren {
    isOpen: boolean;
    closeBtn?: boolean;
    onClose: () => void;
}
declare const TimelyModal: React.FC<TimelyModalProps>;
export default TimelyModal;

import React from 'react';
declare type Optional<T extends object> = {
    [P in keyof T]?: T[P];
};
export declare type Prefill = Optional<{
    name: string;
    email: string;
    phone: string;
    product: string;
    query: string;
    date: Date;
}>;
export declare type Utm = Optional<{
    utmCampaign: string;
    utmSource: string;
    utmMedium: string;
    utmContent: string;
    utmTerm: string;
}>;
export declare type IframeTitle = string;
interface TimelyWidgetProps {
    url: string;
    prefill?: Prefill;
    utm?: Utm;
    iframeTitle?: IframeTitle;
}
declare const TimelyProvider: React.FC;
export { TimelyProvider };
export declare const TimelyIframe: React.FC<TimelyWidgetProps>;
export declare const openPopupWidget: (options: TimelyWidgetProps) => void;

import React from 'react';
declare type Optional<T extends object> = {
    [P in keyof T]?: T[P];
};
export declare type Embed = Optional<{
    embed_domain: string;
    embed_path: string;
    embed_type: 'popup' | 'inline';
}>;
export declare type Prefill = Optional<{
    name: string;
    email: string;
    phone: string;
    product: string;
    query: string;
    date: Date;
}>;
export declare type Utm = Optional<{
    utm_campaign: string;
    utm_source: string;
    utm_medium: string;
    utm_content: string;
    utm_term: string;
    ref: string;
    referral_url: string;
    referral_code: string;
}>;
export declare type IframeTitle = string;
interface TimelyWidgetProps {
    url: string;
    prefill?: Prefill;
    utm?: Utm;
    iframeTitle?: IframeTitle;
    embed?: Embed;
}
declare const TimelyProvider: React.FC;
export { TimelyProvider };
export declare const TimelyIframe: React.FC<TimelyWidgetProps>;
export declare const openPopupWidget: (options: TimelyWidgetProps) => void;

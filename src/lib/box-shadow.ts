import { EventData } from "tns-core-modules/data/observable";
import { View }      from "tns-core-modules/ui/page";
import { isIOS }     from "tns-core-modules/platform";
import { Color }     from "tns-core-modules/color"

export function boxShadow(args: EventData) {
    const view = args.object as View;
    if (isIOS) {
        const iosUIView = view.ios as UIView;
        iosUIView.layer.shadowColor = new Color("#2e4980").ios.CGColor;
        iosUIView.layer.shadowOpacity = 1;
        iosUIView.layer.shadowOffset = CGSizeMake(26, 20);
        iosUIView.layer.shadowRadius = 10;

        iosUIView.layer.shadowPath = UIBezierPath.bezierPathWithRect(CGRectMake(1, 1, 80, 80)).CGPath;
    }
}

export function boxShadowInset(args: EventData) {
    const view = args.object as View;
    if (isIOS) {
        const iosUIView = view.ios as UIView;
        iosUIView.layer.shadowColor = new Color("#4e7bda").ios.CGColor;
        iosUIView.layer.shadowOpacity = 1;
        iosUIView.layer.shadowOffset = CGSizeMake(14, 8);
        iosUIView.layer.shadowRadius = 10;

        iosUIView.layer.shadowPath = UIBezierPath.bezierPathWithRect(CGRectMake(1, 1, 80, 80)).CGPath;
    }
}

import {FancyButton} from "@pixi/ui";
import {Text} from "pixi.js";
import type {TextStyle} from 'pixi.js';
import type {ButtonOptions} from '@pixi/ui';

export interface AttackButtonOptions {
    /** The text displayed on the button. */
    text: string;
    /** Style properties for the text displayed on the button. */
    textStyle?: Partial<TextStyle>;
    /** Options for the underlying button component. */
    buttonOptions?: ButtonOptions;
}

export class AttackButton extends FancyButton {
    /**
     * @param options - Options for the primary button.
     */
    constructor(options: AttackButtonOptions) {
        // Create text object to act as label
        const text = new Text(options?.text ?? '', {
            // Predefine text styles that can be overwritten
            fill: 0x49c8ff,
            fontFamily: 'Bungee Regular',
            fontWeight: 'bold',
            align: 'center',
            fontSize: 40,
            // Allow custom text style to overwrite predefined options
            ...options?.textStyle,
        });

        super({
            // Assign the default view
            defaultView: 'play-btn-up',
            // Assign the pressed view
            pressedView: 'play-btn-down',
            // Assign button text
            text,
            // Offset the button text
            textOffset: {
                default: {
                    y: -30,
                },
                pressed: {
                    y: -15,
                },
            },
            // Anchor to the center-bottom
            anchorX: 0.5,
            anchorY: 1,
            // Allow custom button options to overwrite predefined options
            ...options.buttonOptions,
        });

        this.onPress.connect(() => {

        });
    }
}
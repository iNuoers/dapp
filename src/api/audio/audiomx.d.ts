import { TimelineLite } from "gsap";
export default class NewAudioSFX {
    _audio: any;
    _enabled: boolean;
    _gs: TimelineLite;
    constructor(path: any);
    muzPlay(enabled: any): void;
    setEnable(enabled: boolean): void;
    SFXStop(): void;
    SFXNoSound(): void;
    SFXResumeSound(x: any): void;
    SFXSmartPlayRandVolume(): void;
    SFXPlay(): void;
    SFXStopEnd(audiox: any): void;
    setVolume(h: number): void;
    fadeInFast(): void;
    fadeOut(callback?: object): void;
    fadeOutStop(): void;
    fadeOutLast(sec: number, callback?: object): void;
    static randSFXList(audios: Array<NewAudioSFX>): NewAudioSFX;
}

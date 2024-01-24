// AnimationInterface.ts
interface Animation {
    duration: number; // in milliseconds
    easing: string; // CSS easing function
    delay?: number; // optional delay before animation starts
  }
  
  export default Animation;
  
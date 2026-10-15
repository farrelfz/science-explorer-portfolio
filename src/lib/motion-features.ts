/**
 * LazyMotion feature bundle — loaded asynchronously via `LazyMotion features`.
 * Keeping this in its own module lets Rollup move the animation/gesture/layout
 * feature code out of the main chunk into an on-demand chunk.
 */
export { domMax } from "framer-motion";


/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface NumberInput {
    a?: Nullable<number>;
    b?: Nullable<number>;
    c?: Nullable<number>;
    cadena?: Nullable<string>;
}

export interface IQuery {
    hello(): Nullable<string> | Promise<Nullable<string>>;
    name(): Nullable<string> | Promise<Nullable<string>>;
}

export interface ISubscription {
    newMessage(): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    add(input?: Nullable<NumberInput>): Nullable<number> | Promise<Nullable<number>>;
    delete(input?: Nullable<NumberInput>): Nullable<number> | Promise<Nullable<number>>;
}

type Nullable<T> = T | null;

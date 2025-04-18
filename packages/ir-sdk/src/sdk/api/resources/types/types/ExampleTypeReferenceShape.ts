/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

export type ExampleTypeReferenceShape =
    | FernIr.ExampleTypeReferenceShape.Primitive
    | FernIr.ExampleTypeReferenceShape.Container
    | FernIr.ExampleTypeReferenceShape.Unknown
    | FernIr.ExampleTypeReferenceShape.Named;

export namespace ExampleTypeReferenceShape {
    export interface Primitive extends _Utils {
        type: "primitive";
        primitive: FernIr.ExamplePrimitive;
    }

    export interface Container extends _Utils {
        type: "container";
        container: FernIr.ExampleContainer;
    }

    export interface Unknown extends _Utils {
        type: "unknown";
        unknown: unknown;
    }

    export interface Named extends FernIr.ExampleNamedType, _Utils {
        type: "named";
    }

    export interface _Utils {
        _visit: <_Result>(visitor: FernIr.ExampleTypeReferenceShape._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        primitive: (value: FernIr.ExamplePrimitive) => _Result;
        container: (value: FernIr.ExampleContainer) => _Result;
        unknown: (value: unknown) => _Result;
        named: (value: FernIr.ExampleNamedType) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const ExampleTypeReferenceShape = {
    primitive: (value: FernIr.ExamplePrimitive): FernIr.ExampleTypeReferenceShape.Primitive => {
        return {
            primitive: value,
            type: "primitive",
            _visit: function <_Result>(
                this: FernIr.ExampleTypeReferenceShape.Primitive,
                visitor: FernIr.ExampleTypeReferenceShape._Visitor<_Result>,
            ) {
                return FernIr.ExampleTypeReferenceShape._visit(this, visitor);
            },
        };
    },

    container: (value: FernIr.ExampleContainer): FernIr.ExampleTypeReferenceShape.Container => {
        return {
            container: value,
            type: "container",
            _visit: function <_Result>(
                this: FernIr.ExampleTypeReferenceShape.Container,
                visitor: FernIr.ExampleTypeReferenceShape._Visitor<_Result>,
            ) {
                return FernIr.ExampleTypeReferenceShape._visit(this, visitor);
            },
        };
    },

    unknown: (value?: unknown): FernIr.ExampleTypeReferenceShape.Unknown => {
        return {
            unknown: value,
            type: "unknown",
            _visit: function <_Result>(
                this: FernIr.ExampleTypeReferenceShape.Unknown,
                visitor: FernIr.ExampleTypeReferenceShape._Visitor<_Result>,
            ) {
                return FernIr.ExampleTypeReferenceShape._visit(this, visitor);
            },
        };
    },

    named: (value: FernIr.ExampleNamedType): FernIr.ExampleTypeReferenceShape.Named => {
        return {
            ...value,
            type: "named",
            _visit: function <_Result>(
                this: FernIr.ExampleTypeReferenceShape.Named,
                visitor: FernIr.ExampleTypeReferenceShape._Visitor<_Result>,
            ) {
                return FernIr.ExampleTypeReferenceShape._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernIr.ExampleTypeReferenceShape,
        visitor: FernIr.ExampleTypeReferenceShape._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "primitive":
                return visitor.primitive(value.primitive);
            case "container":
                return visitor.container(value.container);
            case "unknown":
                return visitor.unknown(value.unknown);
            case "named":
                return visitor.named(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;

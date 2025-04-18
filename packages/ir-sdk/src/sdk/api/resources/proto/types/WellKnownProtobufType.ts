/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

/**
 * The set of well-known types supported by Protobuf. These types are often included
 * in the target runtime library, so they usually require special handling.
 *
 * The full list of well-known types can be found at https://protobuf.dev/reference/protobuf/google.protobuf
 */
export type WellKnownProtobufType =
    | FernIr.WellKnownProtobufType.Any
    | FernIr.WellKnownProtobufType.Api
    | FernIr.WellKnownProtobufType.BoolValue
    | FernIr.WellKnownProtobufType.BytesValue
    | FernIr.WellKnownProtobufType.DoubleValue
    | FernIr.WellKnownProtobufType.Duration
    | FernIr.WellKnownProtobufType.Empty
    | FernIr.WellKnownProtobufType.Enum
    | FernIr.WellKnownProtobufType.EnumValue
    | FernIr.WellKnownProtobufType.Field
    | FernIr.WellKnownProtobufType.FieldCardinality
    | FernIr.WellKnownProtobufType.FieldKind
    | FernIr.WellKnownProtobufType.FieldMask
    | FernIr.WellKnownProtobufType.FloatValue
    | FernIr.WellKnownProtobufType.Int32Value
    | FernIr.WellKnownProtobufType.Int64Value
    | FernIr.WellKnownProtobufType.ListValue
    | FernIr.WellKnownProtobufType.Method
    | FernIr.WellKnownProtobufType.Mixin
    | FernIr.WellKnownProtobufType.NullValue
    | FernIr.WellKnownProtobufType.Option
    | FernIr.WellKnownProtobufType.SourceContext
    | FernIr.WellKnownProtobufType.StringValue
    | FernIr.WellKnownProtobufType.Struct
    | FernIr.WellKnownProtobufType.Syntax
    | FernIr.WellKnownProtobufType.Timestamp
    | FernIr.WellKnownProtobufType.Type
    | FernIr.WellKnownProtobufType.Uint32Value
    | FernIr.WellKnownProtobufType.Uint64Value
    | FernIr.WellKnownProtobufType.Value;

export namespace WellKnownProtobufType {
    export interface Any extends _Utils {
        type: "any";
    }

    export interface Api extends _Utils {
        type: "api";
    }

    export interface BoolValue extends _Utils {
        type: "boolValue";
    }

    export interface BytesValue extends _Utils {
        type: "bytesValue";
    }

    export interface DoubleValue extends _Utils {
        type: "doubleValue";
    }

    export interface Duration extends _Utils {
        type: "duration";
    }

    export interface Empty extends _Utils {
        type: "empty";
    }

    export interface Enum extends _Utils {
        type: "enum";
    }

    export interface EnumValue extends _Utils {
        type: "enumValue";
    }

    export interface Field extends _Utils {
        type: "field";
    }

    export interface FieldCardinality extends _Utils {
        type: "fieldCardinality";
    }

    export interface FieldKind extends _Utils {
        type: "fieldKind";
    }

    export interface FieldMask extends _Utils {
        type: "fieldMask";
    }

    export interface FloatValue extends _Utils {
        type: "floatValue";
    }

    export interface Int32Value extends _Utils {
        type: "int32Value";
    }

    export interface Int64Value extends _Utils {
        type: "int64Value";
    }

    export interface ListValue extends _Utils {
        type: "listValue";
    }

    export interface Method extends _Utils {
        type: "method";
    }

    export interface Mixin extends _Utils {
        type: "mixin";
    }

    export interface NullValue extends _Utils {
        type: "nullValue";
    }

    export interface Option extends _Utils {
        type: "option";
    }

    export interface SourceContext extends _Utils {
        type: "sourceContext";
    }

    export interface StringValue extends _Utils {
        type: "stringValue";
    }

    export interface Struct extends _Utils {
        type: "struct";
    }

    export interface Syntax extends _Utils {
        type: "syntax";
    }

    export interface Timestamp extends _Utils {
        type: "timestamp";
    }

    export interface Type extends _Utils {
        type: "type";
    }

    export interface Uint32Value extends _Utils {
        type: "uint32Value";
    }

    export interface Uint64Value extends _Utils {
        type: "uint64Value";
    }

    export interface Value extends _Utils {
        type: "value";
    }

    export interface _Utils {
        _visit: <_Result>(visitor: FernIr.WellKnownProtobufType._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        any: () => _Result;
        api: () => _Result;
        boolValue: () => _Result;
        bytesValue: () => _Result;
        doubleValue: () => _Result;
        duration: () => _Result;
        empty: () => _Result;
        enum: () => _Result;
        enumValue: () => _Result;
        field: () => _Result;
        fieldCardinality: () => _Result;
        fieldKind: () => _Result;
        fieldMask: () => _Result;
        floatValue: () => _Result;
        int32Value: () => _Result;
        int64Value: () => _Result;
        listValue: () => _Result;
        method: () => _Result;
        mixin: () => _Result;
        nullValue: () => _Result;
        option: () => _Result;
        sourceContext: () => _Result;
        stringValue: () => _Result;
        struct: () => _Result;
        syntax: () => _Result;
        timestamp: () => _Result;
        type: () => _Result;
        uint32Value: () => _Result;
        uint64Value: () => _Result;
        value: () => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const WellKnownProtobufType = {
    any: (): FernIr.WellKnownProtobufType.Any => {
        return {
            type: "any",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Any,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    api: (): FernIr.WellKnownProtobufType.Api => {
        return {
            type: "api",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Api,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    boolValue: (): FernIr.WellKnownProtobufType.BoolValue => {
        return {
            type: "boolValue",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.BoolValue,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    bytesValue: (): FernIr.WellKnownProtobufType.BytesValue => {
        return {
            type: "bytesValue",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.BytesValue,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    doubleValue: (): FernIr.WellKnownProtobufType.DoubleValue => {
        return {
            type: "doubleValue",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.DoubleValue,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    duration: (): FernIr.WellKnownProtobufType.Duration => {
        return {
            type: "duration",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Duration,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    empty: (): FernIr.WellKnownProtobufType.Empty => {
        return {
            type: "empty",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Empty,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    enum: (): FernIr.WellKnownProtobufType.Enum => {
        return {
            type: "enum",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Enum,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    enumValue: (): FernIr.WellKnownProtobufType.EnumValue => {
        return {
            type: "enumValue",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.EnumValue,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    field: (): FernIr.WellKnownProtobufType.Field => {
        return {
            type: "field",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Field,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    fieldCardinality: (): FernIr.WellKnownProtobufType.FieldCardinality => {
        return {
            type: "fieldCardinality",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.FieldCardinality,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    fieldKind: (): FernIr.WellKnownProtobufType.FieldKind => {
        return {
            type: "fieldKind",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.FieldKind,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    fieldMask: (): FernIr.WellKnownProtobufType.FieldMask => {
        return {
            type: "fieldMask",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.FieldMask,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    floatValue: (): FernIr.WellKnownProtobufType.FloatValue => {
        return {
            type: "floatValue",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.FloatValue,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    int32Value: (): FernIr.WellKnownProtobufType.Int32Value => {
        return {
            type: "int32Value",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Int32Value,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    int64Value: (): FernIr.WellKnownProtobufType.Int64Value => {
        return {
            type: "int64Value",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Int64Value,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    listValue: (): FernIr.WellKnownProtobufType.ListValue => {
        return {
            type: "listValue",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.ListValue,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    method: (): FernIr.WellKnownProtobufType.Method => {
        return {
            type: "method",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Method,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    mixin: (): FernIr.WellKnownProtobufType.Mixin => {
        return {
            type: "mixin",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Mixin,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    nullValue: (): FernIr.WellKnownProtobufType.NullValue => {
        return {
            type: "nullValue",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.NullValue,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    option: (): FernIr.WellKnownProtobufType.Option => {
        return {
            type: "option",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Option,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    sourceContext: (): FernIr.WellKnownProtobufType.SourceContext => {
        return {
            type: "sourceContext",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.SourceContext,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    stringValue: (): FernIr.WellKnownProtobufType.StringValue => {
        return {
            type: "stringValue",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.StringValue,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    struct: (): FernIr.WellKnownProtobufType.Struct => {
        return {
            type: "struct",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Struct,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    syntax: (): FernIr.WellKnownProtobufType.Syntax => {
        return {
            type: "syntax",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Syntax,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    timestamp: (): FernIr.WellKnownProtobufType.Timestamp => {
        return {
            type: "timestamp",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Timestamp,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    type: (): FernIr.WellKnownProtobufType.Type => {
        return {
            type: "type",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Type,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    uint32Value: (): FernIr.WellKnownProtobufType.Uint32Value => {
        return {
            type: "uint32Value",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Uint32Value,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    uint64Value: (): FernIr.WellKnownProtobufType.Uint64Value => {
        return {
            type: "uint64Value",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Uint64Value,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    value: (): FernIr.WellKnownProtobufType.Value => {
        return {
            type: "value",
            _visit: function <_Result>(
                this: FernIr.WellKnownProtobufType.Value,
                visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
            ) {
                return FernIr.WellKnownProtobufType._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernIr.WellKnownProtobufType,
        visitor: FernIr.WellKnownProtobufType._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "any":
                return visitor.any();
            case "api":
                return visitor.api();
            case "boolValue":
                return visitor.boolValue();
            case "bytesValue":
                return visitor.bytesValue();
            case "doubleValue":
                return visitor.doubleValue();
            case "duration":
                return visitor.duration();
            case "empty":
                return visitor.empty();
            case "enum":
                return visitor.enum();
            case "enumValue":
                return visitor.enumValue();
            case "field":
                return visitor.field();
            case "fieldCardinality":
                return visitor.fieldCardinality();
            case "fieldKind":
                return visitor.fieldKind();
            case "fieldMask":
                return visitor.fieldMask();
            case "floatValue":
                return visitor.floatValue();
            case "int32Value":
                return visitor.int32Value();
            case "int64Value":
                return visitor.int64Value();
            case "listValue":
                return visitor.listValue();
            case "method":
                return visitor.method();
            case "mixin":
                return visitor.mixin();
            case "nullValue":
                return visitor.nullValue();
            case "option":
                return visitor.option();
            case "sourceContext":
                return visitor.sourceContext();
            case "stringValue":
                return visitor.stringValue();
            case "struct":
                return visitor.struct();
            case "syntax":
                return visitor.syntax();
            case "timestamp":
                return visitor.timestamp();
            case "type":
                return visitor.type();
            case "uint32Value":
                return visitor.uint32Value();
            case "uint64Value":
                return visitor.uint64Value();
            case "value":
                return visitor.value();
            default:
                return visitor._other(value as any);
        }
    },
} as const;

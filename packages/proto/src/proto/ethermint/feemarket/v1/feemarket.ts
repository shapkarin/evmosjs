// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: ethermint/feemarket/v1/feemarket.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace ethermint.feemarket.v1 {
    export class Params extends pb_1.Message {
        constructor(data?: any[] | {
            no_base_fee?: boolean;
            base_fee_change_denominator?: number;
            elasticity_multiplier?: number;
            enable_height?: number;
            base_fee?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("no_base_fee" in data && data.no_base_fee != undefined) {
                    this.no_base_fee = data.no_base_fee;
                }
                if ("base_fee_change_denominator" in data && data.base_fee_change_denominator != undefined) {
                    this.base_fee_change_denominator = data.base_fee_change_denominator;
                }
                if ("elasticity_multiplier" in data && data.elasticity_multiplier != undefined) {
                    this.elasticity_multiplier = data.elasticity_multiplier;
                }
                if ("enable_height" in data && data.enable_height != undefined) {
                    this.enable_height = data.enable_height;
                }
                if ("base_fee" in data && data.base_fee != undefined) {
                    this.base_fee = data.base_fee;
                }
            }
        }
        get no_base_fee() {
            return pb_1.Message.getField(this, 1) as boolean;
        }
        set no_base_fee(value: boolean) {
            pb_1.Message.setField(this, 1, value);
        }
        get base_fee_change_denominator() {
            return pb_1.Message.getField(this, 2) as number;
        }
        set base_fee_change_denominator(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get elasticity_multiplier() {
            return pb_1.Message.getField(this, 3) as number;
        }
        set elasticity_multiplier(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get enable_height() {
            return pb_1.Message.getField(this, 5) as number;
        }
        set enable_height(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        get base_fee() {
            return pb_1.Message.getField(this, 6) as string;
        }
        set base_fee(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        static fromObject(data: {
            no_base_fee?: boolean;
            base_fee_change_denominator?: number;
            elasticity_multiplier?: number;
            enable_height?: number;
            base_fee?: string;
        }) {
            const message = new Params({});
            if (data.no_base_fee != null) {
                message.no_base_fee = data.no_base_fee;
            }
            if (data.base_fee_change_denominator != null) {
                message.base_fee_change_denominator = data.base_fee_change_denominator;
            }
            if (data.elasticity_multiplier != null) {
                message.elasticity_multiplier = data.elasticity_multiplier;
            }
            if (data.enable_height != null) {
                message.enable_height = data.enable_height;
            }
            if (data.base_fee != null) {
                message.base_fee = data.base_fee;
            }
            return message;
        }
        toObject() {
            const data: {
                no_base_fee?: boolean;
                base_fee_change_denominator?: number;
                elasticity_multiplier?: number;
                enable_height?: number;
                base_fee?: string;
            } = {};
            if (this.no_base_fee != null) {
                data.no_base_fee = this.no_base_fee;
            }
            if (this.base_fee_change_denominator != null) {
                data.base_fee_change_denominator = this.base_fee_change_denominator;
            }
            if (this.elasticity_multiplier != null) {
                data.elasticity_multiplier = this.elasticity_multiplier;
            }
            if (this.enable_height != null) {
                data.enable_height = this.enable_height;
            }
            if (this.base_fee != null) {
                data.base_fee = this.base_fee;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.no_base_fee !== undefined)
                writer.writeBool(1, this.no_base_fee);
            if (this.base_fee_change_denominator !== undefined)
                writer.writeUint32(2, this.base_fee_change_denominator);
            if (this.elasticity_multiplier !== undefined)
                writer.writeUint32(3, this.elasticity_multiplier);
            if (this.enable_height !== undefined)
                writer.writeInt64(5, this.enable_height);
            if (typeof this.base_fee === "string" && this.base_fee.length)
                writer.writeString(6, this.base_fee);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Params();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.no_base_fee = reader.readBool();
                        break;
                    case 2:
                        message.base_fee_change_denominator = reader.readUint32();
                        break;
                    case 3:
                        message.elasticity_multiplier = reader.readUint32();
                        break;
                    case 5:
                        message.enable_height = reader.readInt64();
                        break;
                    case 6:
                        message.base_fee = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Params {
            return Params.deserialize(bytes);
        }
    }
}

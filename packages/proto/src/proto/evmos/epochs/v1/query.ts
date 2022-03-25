// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: evmos/epochs/v1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_3 from "./../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_4 from "./genesis";
import * as pb_1 from "google-protobuf";
export namespace evmos.epochs.v1 {
    export class QueryEpochsInfoRequest extends pb_1.Message {
        constructor(data?: any[] | {
            pagination?: dependency_3.cosmos.base.query.v1beta1.PageRequest;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.query.v1beta1.PageRequest, 1) as dependency_3.cosmos.base.query.v1beta1.PageRequest;
        }
        set pagination(value: dependency_3.cosmos.base.query.v1beta1.PageRequest) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_3.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }) {
            const message = new QueryEpochsInfoRequest({});
            if (data.pagination != null) {
                message.pagination = dependency_3.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                pagination?: ReturnType<typeof dependency_3.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
            } = {};
            if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.pagination !== undefined)
                writer.writeMessage(1, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryEpochsInfoRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryEpochsInfoRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_3.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryEpochsInfoRequest {
            return QueryEpochsInfoRequest.deserialize(bytes);
        }
    }
    export class QueryEpochsInfoResponse extends pb_1.Message {
        constructor(data?: any[] | {
            epochs?: dependency_4.evmos.epochs.v1.EpochInfo[];
            pagination?: dependency_3.cosmos.base.query.v1beta1.PageResponse;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("epochs" in data && data.epochs != undefined) {
                    this.epochs = data.epochs;
                }
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get epochs() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.evmos.epochs.v1.EpochInfo, 1) as dependency_4.evmos.epochs.v1.EpochInfo[];
        }
        set epochs(value: dependency_4.evmos.epochs.v1.EpochInfo[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.query.v1beta1.PageResponse, 2) as dependency_3.cosmos.base.query.v1beta1.PageResponse;
        }
        set pagination(value: dependency_3.cosmos.base.query.v1beta1.PageResponse) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        static fromObject(data: {
            epochs?: ReturnType<typeof dependency_4.evmos.epochs.v1.EpochInfo.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_3.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }) {
            const message = new QueryEpochsInfoResponse({});
            if (data.epochs != null) {
                message.epochs = data.epochs.map(item => dependency_4.evmos.epochs.v1.EpochInfo.fromObject(item));
            }
            if (data.pagination != null) {
                message.pagination = dependency_3.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                epochs?: ReturnType<typeof dependency_4.evmos.epochs.v1.EpochInfo.prototype.toObject>[];
                pagination?: ReturnType<typeof dependency_3.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            } = {};
            if (this.epochs != null) {
                data.epochs = this.epochs.map((item: dependency_4.evmos.epochs.v1.EpochInfo) => item.toObject());
            }
            if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.epochs !== undefined)
                writer.writeRepeatedMessage(1, this.epochs, (item: dependency_4.evmos.epochs.v1.EpochInfo) => item.serialize(writer));
            if (this.pagination !== undefined)
                writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryEpochsInfoResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryEpochsInfoResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.epochs, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.evmos.epochs.v1.EpochInfo.deserialize(reader), dependency_4.evmos.epochs.v1.EpochInfo));
                        break;
                    case 2:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_3.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryEpochsInfoResponse {
            return QueryEpochsInfoResponse.deserialize(bytes);
        }
    }
    export class QueryCurrentEpochRequest extends pb_1.Message {
        constructor(data?: any[] | {
            identifier?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("identifier" in data && data.identifier != undefined) {
                    this.identifier = data.identifier;
                }
            }
        }
        get identifier() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set identifier(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            identifier?: string;
        }) {
            const message = new QueryCurrentEpochRequest({});
            if (data.identifier != null) {
                message.identifier = data.identifier;
            }
            return message;
        }
        toObject() {
            const data: {
                identifier?: string;
            } = {};
            if (this.identifier != null) {
                data.identifier = this.identifier;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.identifier === "string" && this.identifier.length)
                writer.writeString(1, this.identifier);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCurrentEpochRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCurrentEpochRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.identifier = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryCurrentEpochRequest {
            return QueryCurrentEpochRequest.deserialize(bytes);
        }
    }
    export class QueryCurrentEpochResponse extends pb_1.Message {
        constructor(data?: any[] | {
            current_epoch?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("current_epoch" in data && data.current_epoch != undefined) {
                    this.current_epoch = data.current_epoch;
                }
            }
        }
        get current_epoch() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set current_epoch(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            current_epoch?: number;
        }) {
            const message = new QueryCurrentEpochResponse({});
            if (data.current_epoch != null) {
                message.current_epoch = data.current_epoch;
            }
            return message;
        }
        toObject() {
            const data: {
                current_epoch?: number;
            } = {};
            if (this.current_epoch != null) {
                data.current_epoch = this.current_epoch;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.current_epoch !== undefined)
                writer.writeInt64(1, this.current_epoch);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCurrentEpochResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCurrentEpochResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.current_epoch = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryCurrentEpochResponse {
            return QueryCurrentEpochResponse.deserialize(bytes);
        }
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { BuildingExecutorResponse } from "./BuildingExecutorResponse";
import { RunningResponse } from "./RunningResponse";
import { ErroredResponse } from "./ErroredResponse";
import { StoppedResponse } from "./StoppedResponse";
import { GradedResponse } from "./GradedResponse";
import { GradedResponseV2 } from "./GradedResponseV2";
import { WorkspaceRanResponse } from "./WorkspaceRanResponse";
import { RecordingResponseNotification } from "./RecordingResponseNotification";
import { RecordedResponseNotification } from "./RecordedResponseNotification";
import { InvalidRequestResponse } from "./InvalidRequestResponse";
import { FinishedResponse } from "./FinishedResponse";

export const CodeExecutionUpdate: core.serialization.Schema<
    serializers.CodeExecutionUpdate.Raw,
    SeedTrace.CodeExecutionUpdate
> = core.serialization
    .union("type", {
        buildingExecutor: BuildingExecutorResponse,
        running: RunningResponse,
        errored: ErroredResponse,
        stopped: StoppedResponse,
        graded: GradedResponse,
        gradedV2: GradedResponseV2,
        workspaceRan: WorkspaceRanResponse,
        recording: RecordingResponseNotification,
        recorded: RecordedResponseNotification,
        invalidRequest: InvalidRequestResponse,
        finished: FinishedResponse,
    })
    .transform<SeedTrace.CodeExecutionUpdate>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace CodeExecutionUpdate {
    export type Raw =
        | CodeExecutionUpdate.BuildingExecutor
        | CodeExecutionUpdate.Running
        | CodeExecutionUpdate.Errored
        | CodeExecutionUpdate.Stopped
        | CodeExecutionUpdate.Graded
        | CodeExecutionUpdate.GradedV2
        | CodeExecutionUpdate.WorkspaceRan
        | CodeExecutionUpdate.Recording
        | CodeExecutionUpdate.Recorded
        | CodeExecutionUpdate.InvalidRequest
        | CodeExecutionUpdate.Finished;

    export interface BuildingExecutor extends BuildingExecutorResponse.Raw {
        type: "buildingExecutor";
    }

    export interface Running extends RunningResponse.Raw {
        type: "running";
    }

    export interface Errored extends ErroredResponse.Raw {
        type: "errored";
    }

    export interface Stopped extends StoppedResponse.Raw {
        type: "stopped";
    }

    export interface Graded extends GradedResponse.Raw {
        type: "graded";
    }

    export interface GradedV2 extends GradedResponseV2.Raw {
        type: "gradedV2";
    }

    export interface WorkspaceRan extends WorkspaceRanResponse.Raw {
        type: "workspaceRan";
    }

    export interface Recording extends RecordingResponseNotification.Raw {
        type: "recording";
    }

    export interface Recorded extends RecordedResponseNotification.Raw {
        type: "recorded";
    }

    export interface InvalidRequest extends InvalidRequestResponse.Raw {
        type: "invalidRequest";
    }

    export interface Finished extends FinishedResponse.Raw {
        type: "finished";
    }
}

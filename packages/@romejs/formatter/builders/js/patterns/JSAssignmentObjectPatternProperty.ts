/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Builder, Token} from "@romejs/formatter";

import {JSAssignmentObjectPatternProperty} from "@romejs/ast";
import JSObjectProperty from "../objects/JSObjectProperty";

export default function JSAssignmentObjectPatternProperty(
	builder: Builder,
	node: JSAssignmentObjectPatternProperty,
): Token {
	return JSObjectProperty(builder, node);
}

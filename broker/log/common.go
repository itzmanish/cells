/*
 * Copyright (c) 2018. Abstrium SAS <team (at) pydio.com>
 * This file is part of Pydio Cells.
 *
 * Pydio Cells is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio Cells is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio Cells.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

// Package log provides a persistence layer for json-formatted logs generated by the application.
//
// It is intended to provide an out-of-the-box solution for storing and querying the logs, but should be
// replaced by more scalable solutions like ELK.
package log

import (
	"time"

	"go.uber.org/zap"

	"github.com/pydio/cells/common/proto/log"
)

// MessageRepository exposes interface methods to manage the log messages provided by Pydio.
type MessageRepository interface {
	PutLog(map[string]string) error
	ListLogs(string, int32, int32) (chan log.ListLogResponse, error)
	DeleteLogs(string) (int64, error)
	AggregatedLogs(string, string, int32) (chan log.TimeRangeResponse, error)
	Resync(logger *zap.Logger) error
	Truncate(max int64, logger *zap.Logger) error
}

// Single entry point to convert time.Time to Unix timestamps defined as int32
func convertTimeToTs(ts time.Time) int32 {
	return int32(ts.Unix())
}

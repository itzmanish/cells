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

// Package grpc provides a Pydio GRPC service for managing chat rooms.
package grpc

import (
	"context"

	"github.com/micro/go-micro"
	"github.com/pydio/cells/common/plugins"

	"github.com/pydio/cells/broker/chat"
	"github.com/pydio/cells/common"
	proto "github.com/pydio/cells/common/proto/chat"
	"github.com/pydio/cells/common/service"
)

func init() {
	plugins.Register(func(ctx context.Context) {
		service.NewService(
			service.Name(common.ServiceGrpcNamespace_+common.ServiceChat),
			service.Context(ctx),
			service.Tag(common.ServiceTagBroker),
			service.Description("Chat Service to attach real-time chats to various object. Coupled with WebSocket"),
			service.WithStorage(chat.NewDAO, "broker_chat"),
			service.Unique(true),
			service.WithMicro(func(m micro.Service) error {
				proto.RegisterChatServiceHandler(m.Options().Server, new(ChatHandler))

				return nil
			}),
		)
	})
}

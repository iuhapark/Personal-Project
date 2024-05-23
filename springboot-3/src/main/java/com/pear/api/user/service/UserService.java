package com.pear.api.user.service;

import com.pear.api.common.component.Messenger;
import com.pear.api.common.service.CommandService;
import com.pear.api.common.service.QueryService;
import com.pear.api.user.model.UserDTO;
import com.pear.api.user.model.UserEntity;

public interface UserService extends CommandService<UserDTO>, QueryService<UserDTO> {
    Messenger modify(UserDTO user);

    default UserEntity dtoToEntity(UserDTO dto) {
        return UserEntity.builder()
                .id(dto.getId())
                .username(dto.getUsername())
                .password(dto.getPassword())
                .name(dto.getName())
                .phone(dto.getPhone())
                .email(dto.getEmail())
                .job(dto.getJob())
                .build();
    }

    default UserDTO entityToDto(UserEntity user) {
        return UserDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .password(user.getPassword())
                .name(user.getName())
                .phone(user.getPhone())
                .email(user.getEmail())
                .job(user.getJob())
                .build();
    }

    Messenger login(UserDTO param);

    Boolean logout(String accessToken);

    Boolean existsByUsername(String username);
}
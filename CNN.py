from keras.layers import Conv2D, Dense, Dropout, Flatten
from keras.models import Sequential
from keras.preprocessing.image import ImageDataGenerator

import random


# IMPORTANT CONSTANTS
directory = "/Users/williamchan/Documents/side_projects/ASL/Data/asl_data/asl_alphabet_train/asl_alphabet_train"
target_size = (50, 50)
target_dims = (50, 50, 1)
n_classes = 29
val_frac = 0.1
batch_size = 64

# GENERATORS
image_aug = ImageDataGenerator(samplewise_center=True, samplewise_std_normalization= True, validation_split=val_frac)
train_generator = image_aug.flow_from_directory(directory,color_mode="grayscale", target_size = target_size, batch_size= batch_size, subset="training",shuffle=True)
val_generator = image_aug.flow_from_directory(directory,color_mode="grayscale", target_size=target_size, batch_size=batch_size, subset="validation",shuffle=True)

def model():
    model = Sequential()
    model.add(Conv2D(64, kernel_size=4, strides=1, activation='relu',input_shape=target_dims))
    model.add(Conv2D(64, kernel_size=4, strides=2, activation='relu'))
    model.add(Dropout(0.5))
    model.add(Conv2D(128, kernel_size=4, strides=1, activation='relu'))
    model.add(Conv2D(128, kernel_size=4, strides=2, activation='relu'))
    model.add(Dropout(0.5))
    model.add(Conv2D(256, kernel_size=4, strides=1, activation='relu'))
    model.add(Conv2D(256, kernel_size=4, strides=2, activation='relu'))
    model.add(Flatten())
    model.add(Dropout(0.5))
    model.add(Dense(512, activation='relu'))
    model.add(Dense(n_classes, activation='softmax'))

    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
    return model

def main():
    myModel = model()
    myModel.fit_generator(train_generator, epochs=10, validation_data = val_generator)
    myModel.save('ASLModel.h5')
    myModel.save_weights('ASLModelWeights.h5')

if __name__=="__main__":
    main()





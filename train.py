from functions import *
import pickle

# initialise the data
spam = init_lists('enron/spam/')
ham = init_lists('enron/ham/')
all_emails = [(email, 'spam') for email in spam]
all_emails += [(email, 'ham') for email in ham]
random.shuffle(all_emails)
print ('Corpus size = ' + str(len(all_emails)) + ' emails')

# extract the features
all_features = [(get_features(email), label) for (email, label) in all_emails]
print ('Collected ' + str(len(all_features)) + ' feature sets')

# train the classifier
train_set, test_set, classifier = train(all_features, 0.8)

# evaluate its performance
evaluate(train_set, test_set, classifier)
    
f = open('my_classifier.pickle', 'wb')
pickle.dump(classifier, f)
f.close()
